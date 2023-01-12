import { Model, InferAttributes, InferCreationAttributes } from 'sequelize-cockroachdb';

export interface Tribe extends Model<InferAttributes<Tribe>, InferCreationAttributes<Tribe>> {
  id_tribe: number;
  id_organization: number;
  name: string;
  status: number;
}