import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
import { createKoaServer, useContainer } from 'routing-controllers'
import { connectWithDB } from './src/configs/ConfigDBMS'
import { UnitControllers } from './src/controllers'
import { Container } from 'typedi'
import { userServices } from './src/services'
const PORT = 3000

const startServer = async () => {

    //buat method yang berisi Koa dengan didalamnnya ada DefaultState(mengimplementasikan),
    // DefaultContext(mengeksekusi) dengan membuat Koa Server yang di isi dengan data controller
    // yang berisi clas UnitControllers di src/Controller
    const server: Koa<DefaultState, DefaultContext> = createKoaServer({
        controllers: [UnitControllers]
    })
    // connectWithDB yang diisi method server
    await connectWithDB(server)
    userServices.forEach((service) => {
        Container.set(service, new service(server.context.db))
    })
    useContainer(Container)

    server.listen(PORT).on('listening', () => console.log(`SERVER STARTED ON PORT ${PORT}`))
}

startServer()