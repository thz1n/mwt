import { Request, Response } from 'express';
import { IAccount, ILockSecurity } from '../models/account';
import repository from '../repositories/accountRepository';
import LockKeyRepository from '../repositories/lockPasswordRespository'
import auth from '../auth';
import { Token } from 'mwt-commons/api/auth';
import controllerCommon from 'mwt-commons/api/controllers/controller';

async function getAccounts(req: Request, res: Response) {

    try {
        const accounts: IAccount[] = await repository.findAll();
        return res.json(accounts.map(item => {
            item.memb__pwd = '';
            return item;
        }))
    } catch (err) {
        console.log(err);
        return res.status(500).end();

    }
}

async function getAccount(req: Request, res: Response) {

    try {

        const { memb_guid } = req.params;
        const account = await repository.findById(parseInt(memb_guid));

        if (account === null)
            return res.status(404).end();
        else {
            account.memb__pwd = '';
            return res.json({ account })
        }
    }

    catch (err) {

        console.log(err);
        return res.status(500).end();
    }
}

async function getAccountByUser(req: Request, res: Response) {

    try {

        const { memb___id } = controllerCommon.getToken(res) as Token;
        const account = await repository.findByUser(memb___id);
        if (account === null) return res.status(404).end();

        account.memb__pwd = '';
        return res.json(account);
    }

    catch (err) {
        console.log(err);
        return res.status(500).end();
    }
}

async function addAccount(req: Request, res: Response) {
    try {
        const newAccount = req.body as IAccount;

        const issetAccount = await repository.findByUser(newAccount.memb___id);
        if (issetAccount !== null) return res.status(409).end();

        const issetEmail = await repository.findByEmail(newAccount.mail_addr);
        if (issetEmail !== null) return res.status(409).end();

        const nAccount = await repository.registerAccount(newAccount);
        newAccount.memb__pwd = '';
        newAccount.memb_guid = nAccount.memb_guid;
        return res.status(201).json(newAccount);
    }
    catch (error) {
        console.log(error);
        return res.status(500).end();
    }

}

const getLockPassword = async (req: Request, res: Response) => {
    try {
        const { memb___id } = req.params;
        if (!memb___id) return res.status(404).end();

        const lockPassword = await LockKeyRepository.findLockPassByUser(memb___id);
        return res.json(lockPassword);

    }
    catch (err) {
        console.log(err);
        return res.status(500).end();
    }
}

const setAutoLockPassword = async (req: Request, res: Response) => {

    const { memb___id } = req.params;

    try {
        if (!memb___id) return res.status(404).end();

        const lockPassword = generateRandomLockPassword() as ILockSecurity;
        const setLockPassword = await LockKeyRepository.registerLockKey(memb___id, lockPassword);
        if (setLockPassword) {
            return res.json(setLockPassword);
        }

        return res.status(404).end();

    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }

    function generateRandomLockPassword() {

        let lockPassword = {
            LockPassword: Math.floor(Math.random() * (9100 - 1000) + 1000)
        }
        return lockPassword
    }
}

async function editAccount(req: Request, res: Response) {
    try {

        const account = req.body as IAccount;
        const { memb___id } = req.params;
        if (!memb___id) return res.status(403).end();

        const updatedAccount = await repository.editAccount(memb___id, account);
        if (updatedAccount != null) {
            updatedAccount.memb__pwd = '';
            return res.status(200).json(updatedAccount);
        }

        return res.status(404).end();

    }
    catch (error) {

        console.log(error);
        return res.status(500).end();
    }
}

async function loginAccount(req: Request, res: Response) {
    try {
        const account = req.body as IAccount;
        const findAccount = await repository.findByUser(account.memb___id);

        if (findAccount) {

            const isValid = auth.comparePassword(account.memb__pwd, findAccount.memb__pwd);
            if (isValid != true) {

                return res.status(400).end();
            }
            
            const token = auth.signToken(findAccount.memb___id);
            return res.json({ auth: true, token });
        }

        return res.status(400).end();
    }
    catch (error) {
        console.log(`LoginAccount: ${error}`);
        return res.status(500).end();
    }
}

function logoutAccount(req: Request, res: Response) {
    return res.json({ auth: false, token: null });
}


export default { getAccounts, getAccount, getAccountByUser, addAccount, editAccount, loginAccount, logoutAccount, setAutoLockPassword, getLockPassword };