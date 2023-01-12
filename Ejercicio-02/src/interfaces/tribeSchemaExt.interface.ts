import { ModelCtor } from 'sequelize-cockroachdb';
import { Tribe } from './tribe.interface';

export interface TribeSchemaExt extends ModelCtor<Tribe> {
  findAllData?: () => Promise<Tribe[]>;
}