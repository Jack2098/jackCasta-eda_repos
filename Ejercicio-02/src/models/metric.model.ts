import { DataTypes } from 'sequelize-cockroachdb';
import { sequelize } from "../config/postgres";
import { Metric } from '../interfaces/metric.interface';

const MetricSchema = sequelize.define<Metric>('metric', {
  id_repository: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  coverage: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  bugs: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  vulnerabilities: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  hostpot: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  code_smells: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  }
});

export {
  MetricSchema
}