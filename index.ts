import { replaceWordContent } from "./formatFile"
import * as fs from 'fs'
import * as path from 'path'

let fileNameList = [];
const listOldText = [
  " _HLP"
]
const listNewText = [
  "_HLP"
]
const folderPath = `${__dirname}/files`
const newFolderPath = `${__dirname}/new-files`
fs.readdir(folderPath, (err, files) => {
  if (err) {
      console.error('Lỗi khi đọc folder:', err);
      return;
  }

  // Lọc chỉ lấy file có đuôi .docx
  const fileNameList = files.filter((file) => file.endsWith('.docx'));
  fileNameList.forEach((fileName, index) => {
    const filePath = path.resolve(folderPath, fileName)
    const outputPath = path.resolve(newFolderPath, fileName.replace(" _HLP", "_HLP"))
    replaceWordContent(filePath, outputPath, listOldText, listNewText)
  })
});
// const filePath = path.resolve(
//   `${__dirname}/files`,
//   'HDNT _SMF&DKQUANGCANH#1525.docx',
// )
// const outputPath = path.resolve(
//   `${__dirname}/new-files`,
//   'HDNT _SMF&DKQUANGCANH#1525.docx',
// )
// const oldText = 'CÔNG TY TNHH MỘT THÀNH VIÊN NGUYÊN VẬT LIỆU SMALLFORTUNE'
// const newText = 'CÔNG TY TNHH BẤT ĐỘNG SẢN SẢN XUẤT DỊCH VỤ HƯNG LONG PHÁT'
// replaceWordContent(filePath, outputPath, oldText, newText)
