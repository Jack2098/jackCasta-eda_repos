import { ModelCtor } from 'sequelize-cockroachdb';
import { Repository } from './repository.interface';

export interface RepositoryExt extends ModelCtor<Repository> {
  
}