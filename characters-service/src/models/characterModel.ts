import Sequelize, {Optional, Model} from 'sequelize';
import database from 'mwt-commons/data/mssql';
import { ICharacter } from './character';


// AllCharacters and MyCharacters 

interface ICharacterCreationAttributes extends Optional<ICharacter, "Name">{}
export interface ICharacterModel extends Model<ICharacter, ICharacterCreationAttributes>, ICharacter {}
const characterModel = database.define<ICharacterModel>('Character', {
    AccountID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    cLevel: {
        type: Sequelize.INTEGER
    },
    LevelUpPoint: {
        type: Sequelize.INTEGER
    },
    Class: {
        type: Sequelize.TINYINT
    },
    Strength: {
        type: Sequelize.INTEGER
    },
    Dexterity: {
        type: Sequelize.INTEGER
    },
    Vitality: {
        type: Sequelize.INTEGER
    },
    Energy: {
        type: Sequelize.INTEGER
    },
    Leadership: {
        type: Sequelize.INTEGER
    },
    Life: { 
        type: Sequelize.INTEGER
    },
    MaxLife: { 
        type: Sequelize.INTEGER
    },
    Mana: { 
        type: Sequelize.INTEGER
    },
    MaxMana: { 
        type: Sequelize.INTEGER
    },
    CtlCode: { 
        type: Sequelize.INTEGER
    },
    Resets: {
        type: Sequelize.INTEGER
    },
    SResets: {
        type: Sequelize.INTEGER
    },
    MResets: {
        type: Sequelize.INTEGER
    },
    ResetsDay: {
        type: Sequelize.INTEGER
    },
    ResetsWeek: {
        type: Sequelize.INTEGER
    },
    ResetsMonth: {
        type: Sequelize.INTEGER
    },
    Inventory: {
        type: 'VARBINARY(3984)'
    }
});


export { characterModel }