import  { ICharacterModel, characterModel  } from '../models/characterModel';
import { Op } from 'sequelize';

function findMyAllCharacters(accountId: string) {

    return characterModel.findAll<ICharacterModel>({
        where: {
            AccountID: accountId
        },
        order: [
            ['cLevel', 'DESC'],
            ['Name', 'ASC']
        ]
    });
}

function findAllCharacters() {
  
    return characterModel.findAll<ICharacterModel>({ 
        attributes: ['Name', 'cLevel', 'Class']
    });
}


function findCharacter(cName: string) {

    return characterModel.findOne<ICharacterModel>({
        where: {
            Name: cName
        }
    });
}
type IAddLevelUpPointType = {
    Name: string;
    Strength : number;
    Dexterity : number;
    Vitality : number;
    Energy : number;
    Leadership : number;
    totalPoints: number;
}
async function addLevelUpPoints( {Dexterity, Energy, Leadership, Name, Strength, Vitality, totalPoints}: IAddLevelUpPointType ) {
    const character = await characterModel.findOne<ICharacterModel>({ where : { Name } });

    if(character != null) {

        if(Strength) character.Strength = (character.Strength! + Strength);
        if(Dexterity) character.Dexterity = (character.Dexterity! + Dexterity);
        if(Vitality) character.Vitality = (character.Vitality! + Vitality);
        if(Energy) character.Energy = (character.Energy! + Energy);
        if(Leadership) character.Leadership = (character.Leadership! + Leadership);
        character.LevelUpPoint = (character.LevelUpPoint! - totalPoints);

        await character.save();
        return character;
    }
    return null;

}

function findRankBy(status_name: string, limit: number) {
    
    return characterModel.findAll<ICharacterModel>({
        attributes: [
            'Name',
            'Life',
            'MaxLife',
            'Mana',
            'MaxMana',
            `${status_name}`
        ],
        where: {
            CtlCode: 0
        },
        order: [
            [`${status_name}`, 'DESC'],
            ['Name', 'ASC']
        ],
        limit: limit
        });
}
async function charPositionLevelRank(cName: string, cLevel: number) {
    return await characterModel.findAndCountAll<ICharacterModel>({
        where: {
            Name: {
                [Op.ne]: cName
            },
            cLevel: {
                [Op.gt]: cLevel
            }
        },
        order: [
            ['cLevel', 'DESC']
        ],
    });
}

export default { findMyAllCharacters, findRankBy, findAllCharacters, findCharacter, charPositionLevelRank, addLevelUpPoints }