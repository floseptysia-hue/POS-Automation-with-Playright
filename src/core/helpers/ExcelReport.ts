import * as XLSX from "xlsx";
import * as path from "path";
import * as fs from "fs";

export class ExcelReport {

  static generate(
    rows: any[],
    fileName: string,
    sheetName = "Report"
  ) {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    const reportDir = path.join(process.cwd(), "reports");

    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(
        reportDir,
        { recursive: true }
      );
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fullFileName = `${fileName}-${timestamp}.xlsx`;
    const filePath = path.join(reportDir, fullFileName);

    XLSX.writeFile(workbook, filePath);

    return filePath;
  }
}