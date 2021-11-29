import { Request, Response } from 'express';
import {  } from '../repositories/characterRepository';
import { findBannerByCharacterName } from '../repositories/characterBannerRespository';

export const getBannerByCharacterName = async (req: Request, res: Response) => {
  try {
    const { Name } = req.params;
    if(!Name) return res.status(404).end();

    const banner = await findBannerByCharacterName(Name);
    if(!banner) return res.status(404).end();
    
    return res.json(banner)
    
  } catch (error) {
    return console.log(`Get Character Banner: ${error}`);
  }
}