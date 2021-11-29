import app from './app'
import database from 'mwt-commons/data/mssql';


(async () => {

    try {

        const SPORT = parseInt(`${process.env.PORT}`);

        await database.sync();
        console.log(`Running on DB ${process.env.DB_NAME}`);

        app.listen(SPORT, () => {
            console.log(`Running on port ${SPORT}`);
            console.log('Accounts MWT [V1]');
        });
        

    }
    catch (error) {
        console.log(`${error}`);
    }

})();