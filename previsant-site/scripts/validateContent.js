#!/usr/bin/env node

/**
 * Content Validation Script for Previsant Website
 * 
 * This script validates the migrated content to ensure:
 * - No placeholder text remains
 * - All expected pages exist
 * - Contact information is consistent
 * - No broken internal links
 * - Required content elements are present
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(PROJECT_ROOT, 'src');
const PAGES_DIR = path.join(SRC_DIR, 'pages');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');

// Validation rules - More specific patterns to avoid false positives
const PLACEHOLDER_PATTERNS = [
  /lorem\s+ipsum/gi,
  /placeholder\s+text/gi,
  /your\s+placeholder/gi,
  /enter\s+placeholder/gi,
  /example\.com/gi,
  /test@test/gi,
  /xxx-xxx-xxxx/gi,
  /\[insert.*?\]/gi,
  /todo:/gi,
  /fixme:/gi,
  /placeholder\s*=\s*["'][\w\s]*placeholder/gi,  // Only placeholder attributes with "placeholder" in the value
  /\/api\/placeholder/gi  // API placeholder URLs
];

const REQUIRED_EMAIL = 'info@previsant.com';
const COMPANY_NAME = 'Previsant';
const COPYRIGHT_YEAR = '2023';

const REQUIRED_PAGES = [
  'resources/AIInnovationFramework.jsx',
  'resources/AIStrategyOffering.jsx',
  'resources/HITRUSTAISecurity.jsx',
  'resources/MedicarePaymentBlog.jsx',
  'resources/PaymentIntegrityCaseStudy.jsx',
  'resources/PaymentIntegritySolution.jsx',
  'resources/StrategicEnablement.jsx',
  'NotFound.jsx'
];

const REQUIRED_SECTIONS = [
  'sections/About.jsx',
  'sections/Blog.jsx',
  'sections/Contact.jsx',
  'sections/Footer.jsx',
  'sections/Hero.jsx',
  'sections/Industries.jsx',
  'sections/Navigation.jsx',
  'sections/Resources.jsx',
  'sections/Services.jsx',
  'sections/Testimonials.jsx'
];

// Validation results
let errors = [];
let warnings = [];
let successes = [];

// Helper functions
function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    errors.push(`Failed to read file: ${filePath}`);
    return null;
  }
}

function checkForPlaceholders(content, filePath) {
  PLACEHOLDER_PATTERNS.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      errors.push(`Placeholder text found in ${filePath}: "${matches[0]}"`);
    }
  });
}

function checkContactInfo(content, filePath) {
  // Check for correct email
  if (content.includes('email') && !content.includes(REQUIRED_EMAIL)) {
    warnings.push(`Email reference without correct email in ${filePath}`);
  }
  
  // Check for example emails
  const exampleEmails = content.match(/[\w.-]+@example\.com/gi);
  if (exampleEmails) {
    errors.push(`Example email found in ${filePath}: ${exampleEmails[0]}`);
  }
}

function checkCompanyName(content, filePath) {
  // Check for misspellings
  const misspellings = ['Previsant', 'Previsent', 'Prevision'];
  const correctSpelling = COMPANY_NAME;
  
  // Count correct occurrences
  const correctCount = (content.match(new RegExp(correctSpelling, 'g')) || []).length;
  
  // Check for misspellings
  misspellings.forEach(spelling => {
    if (spelling !== correctSpelling) {
      const pattern = new RegExp(spelling, 'gi');
      const matches = content.match(pattern);
      if (matches) {
        errors.push(`Misspelling found in ${filePath}: "${matches[0]}" (should be "${correctSpelling}")`);
      }
    }
  });
  
  // Only warn about missing company name in main content components, not UI components
  if (correctCount === 0 && filePath.includes('components/sections/') && !filePath.includes('ui/')) {
    warnings.push(`No company name found in ${filePath}`);
  }
}

function checkLinks(content, filePath) {
  // Check for broken link patterns
  const brokenLinkPatterns = [
    /href=["']#["']/g,
    /href=["']javascript:void\(0\)["']/g,
    /to=["']#["']/g
  ];
  
  brokenLinkPatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      warnings.push(`Potential broken link in ${filePath}: ${matches[0]}`);
    }
  });
}

function validateFile(filePath) {
  const content = readFileContent(filePath);
  if (!content) return;
  
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  
  // Run all checks
  checkForPlaceholders(content, relativePath);
  checkContactInfo(content, relativePath);
  checkCompanyName(content, relativePath);
  checkLinks(content, relativePath);
  
  successes.push(`Validated: ${relativePath}`);
}

function checkRequiredFiles() {
  // Check pages
  REQUIRED_PAGES.forEach(page => {
    const filePath = path.join(PAGES_DIR, page);
    if (!fs.existsSync(filePath)) {
      errors.push(`Required page missing: ${page}`);
    } else {
      validateFile(filePath);
    }
  });
  
  // Check sections
  REQUIRED_SECTIONS.forEach(section => {
    const filePath = path.join(COMPONENTS_DIR, section);
    if (!fs.existsSync(filePath)) {
      errors.push(`Required section missing: ${section}`);
    } else {
      validateFile(filePath);
    }
  });
}

function checkCopyright() {
  const footerPath = path.join(COMPONENTS_DIR, 'sections/Footer.jsx');
  if (fs.existsSync(footerPath)) {
    const content = readFileContent(footerPath);
    if (content && !content.includes(COPYRIGHT_YEAR)) {
      warnings.push(`Copyright year might be outdated in Footer.jsx`);
    }
  }
}

function getAllJSXFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllJSXFiles(filePath, fileList);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main validation process
console.log('🔍 Starting Previsant Content Validation...\n');

// Check required files exist
console.log('📁 Checking required files...');
checkRequiredFiles();

// Check copyright
console.log('📅 Checking copyright information...');
checkCopyright();

// Validate all JSX files
console.log('📄 Validating all JSX files...');
const allFiles = getAllJSXFiles(SRC_DIR);
allFiles.forEach(validateFile);

// Generate report
console.log('\n' + '='.repeat(60));
console.log('VALIDATION REPORT');
console.log('='.repeat(60) + '\n');

console.log(`✅ Files validated: ${successes.length}`);
console.log(`❌ Errors found: ${errors.length}`);
console.log(`⚠️  Warnings: ${warnings.length}\n`);

if (errors.length > 0) {
  console.log('❌ ERRORS:');
  errors.forEach((error, index) => {
    console.log(`   ${index + 1}. ${error}`);
  });
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  WARNINGS:');
  warnings.forEach((warning, index) => {
    console.log(`   ${index + 1}. ${warning}`);
  });
  console.log('');
}

// Summary
console.log('='.repeat(60));
if (errors.length === 0) {
  console.log('✅ VALIDATION PASSED: No critical errors found!');
} else {
  console.log('❌ VALIDATION FAILED: Please fix the errors above.');
  process.exit(1);
}

// Additional checks summary
console.log('\n📊 Content Integrity Checks:');
console.log(`   - Company name spelling: ${errors.filter(e => e.includes('Misspelling')).length === 0 ? '✅ Pass' : '❌ Fail'}`);
console.log(`   - No placeholder text: ${errors.filter(e => e.includes('Placeholder')).length === 0 ? '✅ Pass' : '❌ Fail'}`);
console.log(`   - Contact info correct: ${errors.filter(e => e.includes('example.com')).length === 0 ? '✅ Pass' : '❌ Fail'}`);
console.log(`   - Required files exist: ${errors.filter(e => e.includes('missing')).length === 0 ? '✅ Pass' : '❌ Fail'}`);

console.log('\n✨ Validation complete!');