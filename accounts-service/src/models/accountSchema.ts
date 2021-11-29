import Joi from 'joi';

const accountSchema = Joi.object({
    memb_guid: Joi.number()
    .integer()
    .min(1),

    memb___id: Joi.string()
    .min(5)
    .max(12)
    .required(),

    memb__pwd: Joi.string()
    .min(6)
    .max(9)
    .required(),

    memb_name: Joi.string()
    .min(5)
    .max(12)
    .required(),

    sno__numb: Joi.string()
    .min(18)
    .required(),
    
    mail_addr: Joi.string()
    .required(),

    bloc_code: Joi.string()
    .min(0),

    ctl1_code: Joi.string()
    .min(1),

    Vip: Joi.number()
    .min(0)
    .max(3),

    CoinVip: Joi.number()
    .min(0),
})

const lockPassSecuritySchema = Joi.object({
    memb_guid: Joi.number()
    .integer()
    .min(1),

    memb___id: Joi.string()
    .min(5)
    .max(12)
    .required(),

    LockPassword: Joi.number()
    .min(1000)
    .max(9100)
    .required(),
})

const accountUpdateSchema = Joi.object({
    memb__pwd: Joi.string()
    .min(6)
    .max(9),

    memb_name: Joi.string()
    .min(5)
    .max(12),

    memb_guid: Joi.number()
    .min(1)
    .max(18),
})

const loginSchema = Joi.object({
    
    memb_guid: Joi.number()
    .integer()
    .min(1),
    
    memb___id: Joi.string()
    .min(5)
    .max(12)
    .required(),

    memb__pwd: Joi.string()
    .min(6)
    .max(9)
    .required(),

})

export  { accountSchema, loginSchema, accountUpdateSchema, lockPassSecuritySchema } 