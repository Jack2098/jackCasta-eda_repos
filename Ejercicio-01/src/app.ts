import 'dotenv/config';
import express, { Request, Response, Router } from 'express';
import cors from 'cors';

import { response } from './mock';

const route = Router();

const PORT = process.env.PORT || 5001

const app = express();

route.get('/', async (req: Request, res: Response) => {
  const repositories = await response
  res.json({repositories});
});

app.use(cors());
app.use('/', route);

app.listen(PORT, () => console.log(`listening on port ${PORT}`)); 
