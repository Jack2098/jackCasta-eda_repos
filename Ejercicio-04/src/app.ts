import 'dotenv/config';
import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import { generateCsv } from './utils/generateCsv';
import { RepositoryDto } from './interface/repositoryDto';

const PORT = process.env.PORT || 2001;
const URL_EJERCICIO_03 = 'http://localhost:4000';

const app = express();
const route = Router();

app.use(cors());
route.get('/reports/:id', async ({ params }: Request, res: Response) => {
  
  try {
    const { id } = params;
    const response = await fetch(`${URL_EJERCICIO_03}/repository/${id}`);
    const { repositories } = await response.json();
    const data: RepositoryDto[] = repositories;
    
    console.log(data);

    const workbook = generateCsv(data);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename='+'data.csv');

    return workbook.csv.write(res).then(function () {
      res.status(200).json(data);
    })

  } catch (e) {
    res.status(404).send({error: `${e}`});
  }
})

app.use('/', route);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
