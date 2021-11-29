import {Request, Response} from 'express';
import commonMiddleware from 'mwt-commons/api/routes/middlewares';
import {accountSchema, loginSchema, accountUpdateSchema} from '../models/accountSchema';
import controllerCommons from 'mwt-commons/api/controllers/controller';
import {Token} from 'mwt-commons/api/auth';

function validateAccountSchema(req: Request, res: Response, next: any) {
    return commonMiddleware.validadeSchema(accountSchema, req, res, next);
    
}

function validateUpdateAccountSchema(req: Request, res: Response, next: any) {
    return commonMiddleware.validadeSchema(accountUpdateSchema, req, res, next);
    
}

function validateLoginSchema(req: Request, res: Response, next: any) {
    return commonMiddleware.validadeSchema(loginSchema, req, res, next);

}
async function validateAuthentication(req: Request, res: Response, next: any) {
    return commonMiddleware.validateAuth(req, res, next);
}

function validateAuthorization(req: Request, res: Response, next: any) {
    const token = controllerCommons.getToken(res) as Token;
    const { memb___id } = req.params;
    if(memb___id !== token.memb___id) return res.status(403).end();

    next();
}

export {validateAccountSchema, validateUpdateAccountSchema, validateLoginSchema, validateAuthentication, validateAuthorization}