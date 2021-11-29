import Sequelize, {Model, Optional} from 'sequelize';
import database from 'mwt-commons/data/mssql'
import { IAccount } from './account'


export interface IAccountCreationAttributes extends Optional<IAccount, "memb_guid">{}

export interface IAccountModel extends Model<IAccount, IAccountCreationAttributes>, IAccount {}

export default database.define<IAccountModel>('MEMB_INFO', {
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
    memb__pwd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    memb_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sno__numb: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    mail_addr: {
        type: Sequelize.STRING
    },
    bloc_code: {
        type: Sequelize.CHAR,
        allowNull: false,
        defaultValue: 0
    },
    ctl1_code: {
        type: Sequelize.CHAR,
        allowNull: false,
        defaultValue: 1
    },
    Vip: {
        type: Sequelize.INTEGER
    },
    CoinVip: {
        type: Sequelize.INTEGER
    },
})

