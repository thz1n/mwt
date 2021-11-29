import Sequelize, {Optional, Model} from 'sequelize';
import database from 'mwt-commons/data/mssql';
import { IDevilSquare } from './events';


// AllCharacters and MyCharacters 

interface IDevilSquareCreationAttributes extends Optional<IDevilSquare, "CharacterName">{}
export interface IDevilSquareModel extends Model<IDevilSquare, IDevilSquareCreationAttributes>, IDevilSquare {}
const DevilSquareModel = database.define<IDevilSquareModel>('EVENT_INFO', {
    CharacterName: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    Square: {
        type: Sequelize.INTEGER
    },
    Class: {
        type: Sequelize.TINYINT
    },
    Point: { 
        type: Sequelize.INTEGER
    }
});


export { DevilSquareModel }