import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
import { createKoaServer, useContainer } from 'routing-controllers'
import { connectWithDB } from './src/configs/ConfigDBMS'
import { UnitControllers } from './src/controllers'
import { Container } from 'typedi'
import { services } from './src/services'
const PORT = 3000

const startServer = async () => {

    const server: Koa<DefaultState, DefaultContext> = createKoaServer({
        controllers: [UnitControllers]
    })
    await connectWithDB(server)
    services.forEach((service) => {
        Container.set(service, new service(server.context.db))
    })
    useContainer(Container)

    server
        .listen(PORT)
        .on('listening', () =>
            console.log(
                `SERVER STARTED ON PORT ${PORT}`
            )
        )
}

startServer()