
import accountModel, { IAccountModel } from '../models/accountModel';
import { IAccount } from '../models/account';

function findAll() {
    return accountModel.findAll<IAccountModel>();
}

function findById(memb_guid: number){
    return accountModel.findByPk<IAccountModel>(memb_guid);
}

function findByUser(memb___id: string){
    return accountModel.findOne<IAccountModel>({where: {memb___id}});
}

function findByEmail(mail_addr: string){
    return accountModel.findOne<IAccountModel>({where: {mail_addr: mail_addr}});
}

function registerAccount(account: IAccount){

    return accountModel.create(account);

}

async function editAccount(memb___id: string, account: IAccount){
    const originalAccount = await accountModel.findOne<IAccountModel>({ where: { memb___id }});
    if(originalAccount != null){
        if(account.memb_name) originalAccount.memb_name = account.memb_name;
        if(account.memb_guid) originalAccount.memb_guid = account.memb_guid;
        if(account.memb__pwd) originalAccount.memb__pwd = account.memb__pwd;
        await originalAccount.save();
        return originalAccount;
    }
   return null;

}

export default { findAll,  findById, findByUser, findByEmail, registerAccount, editAccount }