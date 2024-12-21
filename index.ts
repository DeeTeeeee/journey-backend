import * as fs from "fs";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

function replaceWordContent(inputFilePath: string, outputFilePath: string, oldText: string, newText: string): void {
    try {
        // Đọc file dưới dạng nhị phân
        if (!fs.existsSync(inputFilePath)) {
            throw new Error("File đầu vào không tồn tại!");
        }

        const content = fs.readFileSync(inputFilePath, "binary");

        // Kiểm tra file có phải định dạng ZIP không
        try {
            const zip = new PizZip(content);

            // Tải file vào Docxtemplater
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });

            // Thay thế nội dung
            const text = doc.getFullText();
            if (!text.includes(oldText)) {
                console.log("Không tìm thấy nội dung cần thay thế!");
                return;
            }

            const updatedText = text.replace(new RegExp(oldText, "g"), newText);
            doc.loadZip(new PizZip(updatedText));

            // Ghi lại file đã thay đổi
            const buffer = doc.getZip().generate({ type: "nodebuffer" });
            fs.writeFileSync(outputFilePath, buffer);

            console.log("Nội dung đã được thay đổi và lưu tại:", outputFilePath);
        } catch (zipError) {
          console.log('zipError', zipError);
          throw new Error("File không phải là định dạng .docx hợp lệ!");
        }
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error.message);
    }
}

// Sử dụng hàm
const inputPath = "/Users/DeeTee/workspace/journey-backend/files/test.docx";
const outputPath = "/Users/DeeTee/workspace/journey-backend/new-files/HDNT _SMF&DKQUANGCANH#1525.docx";

replaceWordContent(
    inputPath,
    outputPath,
    "CÔNG TY TNHH MỘT THÀNH VIÊN NGUYÊN VẬT LIỆU SMALLFORTUNE",
    "CÔNG TY TNHH BẤT ĐỘNG SẢN SẢN XUẤT DỊCH VỤ HƯNG LONG PHÁT"
);
