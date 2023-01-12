import { DataTypes, INTEGER, STRING } from 'sequelize-cockroachdb';
import { sequelize } from "../config/postgres";
import { Organization } from '../interfaces/organization.interface';

const OrganizationSchema = sequelize.define<Organization>('organization', {
  id_organization: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  status: {
    type: INTEGER,
    allowNull: false,
  }
});

export {
  OrganizationSchema
}