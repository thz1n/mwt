import jwt from 'jsonwebtoken';
import fs from 'fs';
import authCommons, {Token} from 'mwt-commons/api/auth';
import path from 'path';

const privateKey = fs.readFileSync(path.join(authCommons.findKeysPath(__dirname), 'private.key'), 'utf8');
const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
const jwtAlgorithm = "RS256";

function compareMembGuid(loggedId: number, paramId: number) {
    if(loggedId === loggedId){
        return true;
    }
}

function comparePassword(password: string, MD5Password: string) {
    if(password === MD5Password){
        return true;
    }
}

function signToken(memb___id: string){
    const token : Token = { memb___id };
    return jwt.sign(token, privateKey, {expiresIn: jwtExpires, algorithm: jwtAlgorithm});
       
}

function verifyToken(token: string){
    return authCommons.verifyToken(token);
}

export default {signToken, verifyToken, comparePassword, compareMembGuid}