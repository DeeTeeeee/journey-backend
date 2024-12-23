import * as fs from 'fs'
import * as path from 'path'
import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'

export const replaceWordContent = (
  filePath: string,
  outputPath: string,
  oldText: string[],
  newText: string[],
) => {
  // Đọc file .docx gốc
  // const filePath = path.resolve(
  //   `${__dirname}/files`,
  //   'HDNT _SMF&DKQUANGCANH#1525.docx',
  // ) // Đường dẫn file gốc
  // const outputPath = path.resolve(
  //   `${__dirname}/new-files`,
  //   'HDNT _SMF&DKQUANGCANH#1525.docx',
  // ) // Đường dẫn file sau khi chỉnh sửa

  // Đọc file .docx vào buffer
  const content = fs.readFileSync(filePath, 'binary')
  const zip = new PizZip(content)

  // Load file vào docxtemplater
  // const doc = new Docxtemplater(zip, {
  //   paragraphLoop: true,
  //   linebreaks: true,
  // })

  // Tìm kiếm và thay thế nội dung
  // const oldText = 'CÔNG TY TNHH MỘT THÀNH VIÊN NGUYÊN VẬT LIỆU SMALLFORTUNE'
  // const newText = 'CÔNG TY TNHH BẤT ĐỘNG SẢN SẢN XUẤT DỊCH VỤ HƯNG LONG PHÁT'

  const documentXml = zip.file('word/document.xml')?.asText()
  // console.log(documentXml)
  if (!documentXml) {
    console.error('Không tìm thấy file word/document.xml trong file .docx')
    process.exit(1)
  }

  // Thay thế nội dung trong XML
  // const updatedXml = documentXml.replace(new RegExp(oldText), newText)
  let updatedXml = ""
  for (let i = 0; i < oldText.length; i++) {
    if (!updatedXml) {
      updatedXml = documentXml.replace(oldText[i], newText[i])
    } else {
      updatedXml = updatedXml.replace(oldText[i], newText[i])
    }
  }

  zip.file('word/document.xml', updatedXml)
    
  // Xuất file .docx đã chỉnh sửa
  const buffer = zip.generate({type: 'nodebuffer'})
  fs.writeFileSync(outputPath, buffer)

  console.log(`File đã được chỉnh sửa và lưu tại: ${outputPath}`)

}
