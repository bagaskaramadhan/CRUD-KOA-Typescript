import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
import { createKoaServer, useContainer } from 'routing-controllers'
import { connectWithDB } from './src/configs/ConfigDBMS'
import { CategoryController } from './src/controllers'
import { Container } from 'typedi'
import { categoryService } from './src/services'
const PORT = 3000

const startServer = async () => {

    //buat method yang berisi Koa dengan didalamnnya ada DefaultState(mengimplementasikan),
    // DefaultContext(mengeksekusi) dengan membuat Koa Server yang di isi dengan data controller
    // yang berisi clas CategoryController di src/Controller
    const server: Koa<DefaultState, DefaultContext> = createKoaServer({
        controllers: [CategoryController]
    })
    // connectWithDB yang diisi method server
    await connectWithDB(server)
    categoryService.forEach((service) => {
        Container.set(service, new service(server.context.db))
    })
    useContainer(Container)

    server.listen(PORT).on('listening', () => console.log(`SERVER STARTED ON PORT ${PORT}`))
}

startServer()