import {Router} from 'express';
import middlewareCommons from 'mwt-commons/api/routes/middlewares';
import { getDevilSquare } from '../controllers/eventsController';
import { getBannerByCharacterName } from '../controllers/characterBannerController'
import { getGuildByCharName, getGuild, getGuildMembers, getAllGuilds, makeGuildLogo } from '../controllers/guildController'
import { getCharacterRankPosition, getCharacter, getAllCharacters, getCharacterRanking, getMyCharacters, distributeLevelUpPoints} from '../controllers/charactersController';
import { limiterAddLevelPoints } from '../middlewares/limiterAddLevelPoints'

const router = Router();

router.get('/character/:characterName/', getCharacter);
router.get('/characters/', getAllCharacters);
router.get('/banner/:Name/', getBannerByCharacterName)
router.get('/ranking/:rank_name/:limit/', getCharacterRanking);
router.get('/rankposition/:cName/', getCharacterRankPosition);
/** */
router.get('/mycharacters/', middlewareCommons.validateAuth, getMyCharacters);
router.patch('/mycharacters/:Name/addpoints', middlewareCommons.validateAuth,  limiterAddLevelPoints, distributeLevelUpPoints);
/** */
router.get('/guild/:G_Name/', getGuild);
router.get('/guild/:G_Name/members/', getGuildMembers);
router.get('/guilds/', getAllGuilds);
router.get('/:charName/guild/', getGuildByCharName);
router.get('/makeguildlogo/', makeGuildLogo);
/** */
router.get('/events/devilsquare/', getDevilSquare);


export default router;