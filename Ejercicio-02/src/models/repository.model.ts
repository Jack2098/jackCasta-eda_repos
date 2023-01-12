import { DataTypes } from 'sequelize-cockroachdb';
import { sequelize } from "../config/postgres";
import { Repository } from '../interfaces/repository.interface';
import { TribeSchema } from './tribe.model';

const RepositorySchema = sequelize.define<Repository>('repository', {
  id_repository: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  id_tribe: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  create_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  status: {
    type: DataTypes.CHAR,
    allowNull: false,
  }
});

RepositorySchema.belongsTo(TribeSchema, {
  foreignKey: 'id_tribe',
  as: 'tribe'
})

export {
  RepositorySchema
}