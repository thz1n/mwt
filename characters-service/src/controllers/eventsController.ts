import {Request, Response} from 'express';
import eventRepository from '../repositories/eventsRepository';

export const getDevilSquare = async (req: Request, res: Response, next: any) => {
    try {
         const event = await eventRepository.findDevilSquare();
         return res.json(event)
 
    } catch (error) {
        console.log(`Get Event DS: ${error}`);
    }
     
 }

