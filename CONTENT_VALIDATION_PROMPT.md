# Content Migration Validation Prompt

## Context
You are tasked with performing a thorough audit of a website migration from an old static site to a new React application. The original site was located at `/mnt/c/Github/Previsant/OLDWEBSITE/` and the new site is at `/mnt/c/Github/Previsant/previsant-site/`. Your job is to ensure NO content was lost during migration and to improve any areas that need enhancement.

## Your Mission

### 1. **Content Extraction and Comparison**
First, extract ALL text content from the old website:
- Navigate to `/mnt/c/Github/Previsant/OLDWEBSITE/www.previsant.com/`
- Read every HTML file systematically
- Create a comprehensive list of:
  - All page titles
  - All headings (h1, h2, h3, etc.)
  - All paragraph text
  - All list items
  - All link text and URLs
  - Any metadata or alt text
  - Contact information (emails, phones, addresses)
  - Any embedded content descriptions

### 2. **PDF Content Verification**
For each PDF in the old site:
- List all 8 PDFs found in `/_files/ugd/`
- Note their file sizes and names
- Check if corresponding web pages exist in the new site at `/src/pages/resources/`
- Verify that key information from each PDF is represented in the new pages

### 3. **New Site Content Audit**
Systematically review the new site:
- Read all components in `/src/components/sections/`
- Read all resource pages in `/src/pages/resources/`
- Create a content map showing where each piece of old content now lives

### 4. **Gap Analysis**
Create a detailed report of:
- ❌ **Missing Content**: Any text, data, or information present in old site but not in new
- ⚠️ **Modified Content**: Content that exists but has been changed (note if improvement or error)
- ➕ **New Content**: Content added that wasn't in original (ensure it's appropriate)
- 🔗 **Broken References**: Any links, images, or resources that no longer work

### 5. **Quality Improvements**
For any content issues found:
- Fix typos or grammatical errors
- Improve clarity while maintaining original meaning
- Ensure consistency in terminology and branding
- Verify all statistics and claims are accurately transferred
- Check that all contact information is current and correct

### 6. **SEO and Metadata Check**
Verify:
- All pages have appropriate titles and descriptions
- Keywords from old site are preserved or improved
- No important pages are orphaned (not linked from anywhere)
- URL structure makes sense for the content

### 7. **Special Attention Areas**
Pay extra attention to:
- Company description and mission statements
- Service offerings and their descriptions
- Case study numbers and results
- Team member information
- Legal disclaimers or compliance statements
- Industry-specific terminology
- Contact forms and CTAs

## Deliverables

### 1. **Content Comparison Report**
Create a markdown table with columns:
| Old Site Location | Old Content | New Site Location | New Content | Status | Notes |

### 2. **Missing Content List**
List any content that appears to be missing with:
- Exact text that's missing
- Where it was located in old site
- Suggested location in new site
- Priority level (Critical/High/Medium/Low)

### 3. **Improvement Recommendations**
For each improvement needed:
- Current state
- Recommended change
- Reason for change
- Implementation code/text

### 4. **Validation Script**
Create a simple script that could be run in the future to:
- Check for broken links
- Verify all expected pages exist
- Confirm no Lorem Ipsum or placeholder text remains
- Validate contact information format

## Critical Checklist
Before considering the migration complete, verify:
- [ ] Every HTML page from old site has been reviewed
- [ ] All 8 PDFs have corresponding web pages
- [ ] Company name "Previsant" is spelled correctly everywhere
- [ ] All email addresses and phone numbers work
- [ ] No Lorem Ipsum or placeholder text exists
- [ ] All statistical claims have been preserved accurately
- [ ] Service descriptions are complete and accurate
- [ ] No broken image references or missing alt text
- [ ] Footer contains all necessary legal/copyright info
- [ ] Navigation menu items match the site structure

## Red Flags to Watch For
- Generic descriptions that lost specific details
- Numbers or percentages that changed without explanation
- Technical terms that were simplified incorrectly
- Contact information that points to examples
- Links that go to # or javascript:void(0)
- Images referenced but not included
- Testimonials or quotes without attribution
- Copyright years that are outdated

Remember: The goal is 100% content preservation with enhancements, not rewrites. Every piece of information from the old site should exist in the new site, potentially improved but never lost.