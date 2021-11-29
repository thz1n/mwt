import { Router } from 'express';
import accountsController from '../controllers/accounts';
import { validateAccountSchema, validateLoginSchema, validateUpdateAccountSchema, validateAuthentication, validateAuthorization } from './middlewares';



const router = Router();

router.get('/accounts', validateAuthentication, accountsController.getAccounts);
router.get('/accounts/:memb_guid', validateAuthentication, validateAuthorization, accountsController.getAccount);
router.get('/accounts/user/:memb___id', validateAuthentication, validateAuthorization, accountsController.getAccountByUser);
router.get('/account/lockPassword/:memb___id', validateAuthentication, validateAuthorization, accountsController.setAutoLockPassword)
router.get('/account/getlockPassword/:memb___id', validateAuthentication, validateAuthorization, accountsController.getLockPassword)
router.patch('/accounts/:memb___id', validateAuthentication, validateAuthorization, validateUpdateAccountSchema, accountsController.editAccount);
router.post('/account/new', validateAccountSchema, accountsController.addAccount);
router.post('/account/login', validateLoginSchema, accountsController.loginAccount);
router.post('/account/logout', validateAuthentication, accountsController.logoutAccount);


export default router;