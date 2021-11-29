import Sequelize, {Model, Optional} from 'sequelize';
import database from 'mwt-commons/data/mssql';
import { ILockSecurity } from './account';

export interface ILockSecCreateAttributes extends Optional<ILockSecurity, "memb_guid">{}
export interface ILockPassModel extends Model<ILockSecurity, ILockSecCreateAttributes>, ILockSecurity{}

export default database.define<ILockPassModel>('MEMB_INFO', {
  memb_guid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  memb___id: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
  },
  LockPassword: {
      type: Sequelize.INTEGER
  },
})
