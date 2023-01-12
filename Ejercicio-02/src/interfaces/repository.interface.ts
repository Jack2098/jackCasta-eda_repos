import { Model, InferAttributes, InferCreationAttributes } from 'sequelize-cockroachdb';

export interface Repository extends Model<InferAttributes<Repository>, InferCreationAttributes<Repository>>{
  id_repository: number;
  id_tribe: number;
  name: string;
  state: string;
  create_time: string;
  status: string;
}