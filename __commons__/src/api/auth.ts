import jwt, {VerifyOptions} from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';


const publicKey = fs.readFileSync(path.join(findKeysPath(__dirname), 'public.key'), 'utf8');
const jwtAlgorithm = "RS256";

export type Token = { memb___id: string , jwt?: string };

function findKeysPath(currentPath: string): string {
    const keysPath = path.join(currentPath, 'keys');
    if (fs.existsSync(keysPath)) return keysPath;
    else return findKeysPath(path.join(currentPath, '..'));
}

function verifyToken(token: string){
    try {
        const decoded : Token = jwt.verify(token, publicKey, { algorithm: [jwtAlgorithm] } as VerifyOptions) as Token;
        return {memb___id: decoded.memb___id};

    } catch (error) {
        console.log(`verify: ${error}`);
        return null;
    }

}

export default {verifyToken, findKeysPath}