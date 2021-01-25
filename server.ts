const Koa = require('koa')
// const KoaRouter = require('koa-router')
import { ENVConfig } from './src/helpers/Env'
const server = new Koa();
// const router = new KoaRouter();
import { connectWithDB } from './src/configs/ConfigDBMS'
import {router} from './src/routes/router'


const StartServer = async () => {

    await connectWithDB(server)

    // router.get("/", router);

    server.use(router.routes()).use(router.allowedMethods());

    server.listen(ENVConfig.PORT, () => {
        console.log(`SERVER STARTED ON PORT ${ENVConfig.PORT}`);
        console.log(`TEST ON http://localhost:${ENVConfig.PORT}`);
    });

}

StartServer()