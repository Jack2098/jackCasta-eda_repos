import 'dotenv/config'
import { Sequelize } from 'sequelize-cockroachdb';

const username = process.env.POSTGRES_USERNAME || '';
const host = process.env.POSTGRES_HOST || '';
const database = process.env.POSTGRES_DATABASE || '';
const port = Number(process.env.POSTGRES_PORT) || 3000;
const password = process.env.POSTGRES_PASS  || '';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: username,
  host: host,
  database: database,
  port: port,
  password: password,
  dialectOptions: {
    ssl: {

    }
  },
  logging: false
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Base de Datos conectado');
  } catch (e) {
    console.log('Error en conexión')
  }
}

export {
  sequelize,
  dbConnection
}