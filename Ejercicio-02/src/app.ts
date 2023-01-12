import express from 'express';
import cors from 'cors';
import { dbConnection } from './config/postgres';
import { router } from './routes';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(PORT,() => {
  console.log(`Escuchando en el puerto ${PORT}`);
});

dbConnection();