import exceljs from 'exceljs';
import { RepositoryDto } from '../interface/repositoryDto';

const generateCsv = (data: RepositoryDto[]) => {

  let workbook = new exceljs.Workbook();
  let worksheet = workbook.addWorksheet('Worksheet');
  let columns = Object.keys(data[0])

  worksheet.columns = columns.map(el => {
    return { header: el, key: el, width: 30 }
  })

  data.map(repo => {
    worksheet.addRow(Object.values(repo))
  })
  
  return workbook;
}

export {
  generateCsv
}