import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize-cockroachdb';

export interface Metric extends Model<InferAttributes<Metric>, InferCreationAttributes<Metric>>{
  id_repository: CreationOptional<number>;
  coverage: number;
  bugs: number;
  vulnerabilities: number;
  hostpot: number;
  code_smells: number;
}