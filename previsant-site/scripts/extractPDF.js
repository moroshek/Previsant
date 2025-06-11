import fs from 'fs'
import pdf from 'pdf-parse'
import path from 'path'

const pdfPath = process.argv[2]

if (!pdfPath) {
  console.error('Please provide a PDF path')
  process.exit(1)
}

async function extractPDF() {
  try {
    const dataBuffer = fs.readFileSync(pdfPath)
    const data = await pdf(dataBuffer)
    
    console.log('=== PDF EXTRACTION RESULTS ===')
    console.log('Pages:', data.numpages)
    console.log('Title:', data.info?.Title || 'Unknown')
    console.log('Author:', data.info?.Author || 'Unknown')
    console.log('\n=== CONTENT ===\n')
    console.log(data.text)
    
    // Save to file for analysis
    const outputPath = path.join(process.cwd(), 'pdf-content.txt')
    fs.writeFileSync(outputPath, data.text)
    console.log('\n=== Content saved to pdf-content.txt ===')
    
  } catch (error) {
    console.error('Error:', error)
  }
}

extractPDF()