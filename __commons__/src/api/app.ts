import express, {Router} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import logger from 'morgan';


export default (router: Router) =>{
    const app = express();
    app.use(logger('dev'));
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(router);
    return app;
}
