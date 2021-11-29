import Sequelize, {Optional, Model} from 'sequelize';
import database from 'mwt-commons/data/mssql';
import { IGuild, IGuildMembers } from './guild';


// Guilds and GuildMembers

interface IGuildCreationAttributes extends Optional<IGuild, "G_Name">{}
export interface IGuildModel extends Model<IGuild, IGuildCreationAttributes>, IGuild {}
const GuildModel = database.define<IGuildModel>('Guild', {
    G_Name: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    G_Mark: {
        type: 'VARBINARY(32)'
    },
    G_Score: {
        type: Sequelize.INTEGER
    },
    G_Master: {
        type: Sequelize.STRING
    },
    G_Count: { 
        type: Sequelize.INTEGER
    },
    Number: { 
        type: Sequelize.INTEGER
    },
    G_Type: { 
        type: Sequelize.INTEGER
    },
    G_Rival: { 
        type: Sequelize.INTEGER
    },
    G_Union: { 
        type: Sequelize.INTEGER
    }
});

interface IGuildMembersCreationAttributes extends Optional<IGuildMembers, "Name">{}
export interface IGuildMembersModel extends Model<IGuildMembers, IGuildMembersCreationAttributes>, IGuildMembers {}
const GuildMembersModel = database.define<IGuildMembersModel>('GuildMember', {
    Name: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    G_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    G_Level: {
        type: Sequelize.TINYINT
    },
    G_Status: {
        type: Sequelize.TINYINT
    }
});


export { GuildModel, GuildMembersModel }