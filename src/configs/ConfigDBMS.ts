import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
import { Connection, createConnection } from 'typeorm'
import { ENVConfig } from '../helpers/Env'
import { ProductEntity } from '../entities/ProductEntity'
import 'reflect-metadata'

export const connectWithDB = async (
    server: Koa<DefaultState, DefaultContext>
): Promise<void> => {
    const connection: Connection = await createConnection({
        type: 'mysql',
        host: ENVConfig.HOST,
        username: ENVConfig.USER,
        password: ENVConfig.PASS,
        database: ENVConfig.NAME,
        entities: [ProductEntity]
    })

    await connection.synchronize(true)
        .then(() => console.log(`CONNECT TO ${ENVConfig.NAME}`))
        .catch(() => console.error('FAILED'))
    server.context.db = connection
}