import { VipStatus } from './vipStatus';

export interface IAccount {
    memb_guid?: number,
    memb___id: string,
    memb__pwd: string,
    memb_name: string,
    sno__numb: string,
    mail_addr: string,
    bloc_code?: string,
    ctl1_code?: string,
    Vip?: number,
    CoinVip?: number,
}

export interface ILockSecurity {
    memb_guid?: number,
    memb___id?: string,
    LockPassword: number
}

