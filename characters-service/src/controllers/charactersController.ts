import { Request, Response } from 'express';
import controllerCommon from 'mwt-commons/api/controllers/controller';
import { Token } from 'mwt-commons/api/auth';
import charRepository from '../repositories/characterRepository';


export const getMyCharacters = async (req: Request, res: Response, next: any) => {
    try {
        const { memb___id } = controllerCommon.getToken(res) as Token;
        const characters = await charRepository.findMyAllCharacters(memb___id);
        return res.json(characters);

    } catch (error) {
        return console.log(`Get Characters with Authenticed Account: ${error}`);
    }

}

export const getAllCharacters = async (req: Request, res: Response, next: any) => {
    try {
        const characters = await charRepository.findAllCharacters();
        return res.json(characters)

    } catch (error) {
        return console.log(`Get All Characters: ${error}`);
    }

}

export const getCharacter = async (req: Request, res: Response, next: any) => {
    try {
        const { characterName } = req.params;
        const findCharacterByName = await charRepository.findCharacter(String(characterName));
        if(findCharacterByName){
            return res.json(findCharacterByName);
        }
        return res.status(404).end();
        
    } catch (error) {
        return console.log(`Get Character: ${error}`);
    }

}

export const distributeLevelUpPoints = async (req: Request, res: Response) => {
    try {
        const { memb___id } = controllerCommon.getToken(res) as Token;
        const { Name } = req.params;
        const { Strength, Dexterity, Vitality, Energy, Leadership } = req.body;

        const findCharacter = await charRepository.findCharacter(String(Name));

        if(findCharacter) {

            const totalPoints = Number(Strength) + Number(Dexterity) + Number(Vitality) + Number(Energy) + Number(Leadership);
            const { LevelUpPoint, Class, AccountID }  = findCharacter;
            const characterIsNotDL = (Class! < 64 || Class! > 66);

            if (AccountID != memb___id) return res.status(404).end();
            if (totalPoints > LevelUpPoint! || LevelUpPoint! <= 0) return res.status(400).end();
            if (characterIsNotDL && Leadership > 0) return res.status(400).end();

            await charRepository.addLevelUpPoints({ 
                Name, 
                Strength, 
                Dexterity, 
                Vitality, 
                Energy, 
                Leadership, 
                totalPoints 
            });
            return res.status(200).send();
        }

        return res.status(404).end();
        
    } catch (error) {
        return console.log(`Add Level Up Points: ${error}`);
    }
}

export const getCharacterRanking = async (req: Request, res: Response, next: any) => {
    try {
        const { rank_name, limit } = req.params;
        const parsedLimit = parseInt(limit);
        
        if (rank_name === 'cLevel' || rank_name === 'Resets' || rank_name === 'MResets' || rank_name === 'SResets') {
            const getRanking = await charRepository.findRankBy(rank_name, parsedLimit);
            return res.json(getRanking)
        };
        return res.status(404).end();

    } catch (error) {
        return console.log(`Error with get character: ${error}`);
    }
}

export const getCharacterRankPosition = async (req: Request, res: Response) => {
    try {
        const { cName } = req.params;
        const character = await charRepository.findCharacter(String(cName));
        if (character) {
            const cLevel = character.cLevel;
            const position = await charRepository.charPositionLevelRank(String(cName), Number(cLevel));
            return res.json(position.count);
        }
        return res.status(404).end();

    } catch (error) {

        return console.log(`Get character ranking position: ${error}`);
    }


}
