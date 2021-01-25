import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
// const KoaRouter = require('koa-router')
import { ENVConfig } from './src/helpers/Env'
// const server = new Koa();
// const router = new KoaRouter();
import { connectWithDB } from './src/configs/ConfigDBMS'
// import { router } from './src/routes/router'
import { UsersController } from './src/controllers'
import { createKoaServer, useContainer } from 'routing-controllers'
// import { services } from './src/services'
import { Container } from 'typedi'

const StartServer = async () => {
    const server: Koa<DefaultState, DefaultContext> = createKoaServer({
        controllers: [UsersController]
    })
    await connectWithDB(server)
    // services.forEach((service) => {
    //     // Container
    //     Container.set(service, new service(server.context.db))
    // })
    // useContainer(Container)
    // router.get("/", (ctx) => (ctx.body = "HELLOs"));

    // server.use(router.routes()).use(router.allowedMethods());

    server
        .listen(ENVConfig.PORT)
        .on('listening', () =>
            console.log(`SERVER STARTED ON PORT ${ENVConfig.PORT}`)
        )

}

StartServer()