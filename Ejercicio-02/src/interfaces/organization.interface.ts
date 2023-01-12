import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize-cockroachdb';

export interface Organization extends Model<InferAttributes<Organization>, InferCreationAttributes<Organization>> {
  id_organization: CreationOptional<number>;
  name: string;
  status: number;
}