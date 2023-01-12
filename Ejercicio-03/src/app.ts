import 'dotenv/config';
import express, { Request, Response, Router } from 'express';
import cors from 'cors';
import { route } from './routes/repository.route';

const PORT = process.env.PORT || 5001

const app = express();

app.use(cors());
app.use('/', route);

app.listen(PORT, () => console.log(`listening on port ${PORT}`)); 
