import LockPassModel, { ILockPassModel } from "../models/lockPassModel";
import { ILockSecurity } from '../models/account';


const registerLockKey = async (memb___id: string, lockSecurity: ILockSecurity) => {
  const originalLockKey = await LockPassModel.findOne<ILockPassModel>({ where: { memb___id }});
  if (originalLockKey){
    if(lockSecurity.LockPassword) originalLockKey.LockPassword = lockSecurity.LockPassword;
    await originalLockKey.save();
    return originalLockKey;
  }
}

const findLockPassByUser = async (memb___id: string) => {
  return LockPassModel.findOne<ILockPassModel>({where: {memb___id}});
}


export default { registerLockKey, findLockPassByUser }