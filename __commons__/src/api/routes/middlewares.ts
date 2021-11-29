import {Request, Response} from 'express';
import Joi from 'joi';
import auth from '../auth';

function validadeSchema(schema: Joi.ObjectSchema<any>, req: Request, res: Response, next: any) {
    const { error } = schema.validate(req.body);
    if(error == null) return next();

    const { details } = error;
    const messages = details.map(item => item.message).join(',');

    console.log(messages);
    return res.status(422).end();
}

async function validateAuth(req: Request, res: Response, next: any) {
    try {
        const token = req.headers['authorization'] as string;
        if(!token) return res.status(401).end();

        const payload = await auth.verifyToken(token);
        if(!payload) return res.status(401).end();

        res.locals.payload = payload;
        return next();
        
    } catch (error) {
        console.log(`validateAuth: ${error}`);
        return res.status(400).end();
    }
}

export default {validadeSchema , validateAuth}