import Sequelize, {Optional, Model} from 'sequelize';
import database from 'mwt-commons/data/mssql';
import { ICharacterBanner } from './characterBanner';

interface ICharacterBannerCreationAttributes extends Optional<ICharacterBanner, "Name">{}
export interface ICharacterBannerModel extends Model<ICharacterBanner, ICharacterBannerCreationAttributes>, ICharacterBanner {}
const characterBannerModel = database.define<ICharacterBannerModel>('Character', {
  Name: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false
  },
  banner: {
    type: Sequelize.STRING(16)
  }
});

export { characterBannerModel }