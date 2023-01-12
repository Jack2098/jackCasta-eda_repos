import { DataTypes } from 'sequelize-cockroachdb';
import { sequelize } from "../config/postgres";
import { Tribe } from '../interfaces/tribe.interface';
import { OrganizationSchema } from './organization.model';
import { TribeSchemaExt } from '../interfaces/tribeSchemaExt.interface';

const TribeSchema: TribeSchemaExt = sequelize.define<Tribe>('tribe', {
  id_tribe: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  id_organization: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

TribeSchema.belongsTo(OrganizationSchema, {
  foreignKey: 'id_organization',
  as: 'organization'
})

TribeSchema.findAllData = () => {
  return TribeSchema.findAll({
    include: {
      model: OrganizationSchema,
      as: 'organization'
    }
  });
}

export {
  TribeSchema
}