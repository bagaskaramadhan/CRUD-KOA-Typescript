import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
// const KoaRouter = require('koa-router')
import { ENVConfig } from './src/helpers/Env'
// const server = new Koa();
// const router = new KoaRouter();
import { connectWithDB } from './src/configs/ConfigDBMS'
import { router } from './src/routes/router'
import { UserController } from './src/controllers'
import { createKoaServer } from 'routing-controllers'

const StartServer = async () => {
    const server: Koa<DefaultState, DefaultContext> = createKoaServer({
        controllers: [UserController]
    })
    await connectWithDB(server)
    // router.get("/", (ctx) => (ctx.body = "HELLOs"));

    server.use(router.routes()).use(router.allowedMethods());

    server.listen(ENVConfig.PORT, () => {
        console.log(`SERVER STARTED ON PORT ${ENVConfig.PORT}`);
        console.log(`TEST ON http://localhost:${ENVConfig.PORT}/users/API/`);
    });

}

StartServer()