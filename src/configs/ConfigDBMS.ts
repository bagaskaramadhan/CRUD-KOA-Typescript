import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
import { createConnection } from 'typeorm'
import { ENVConfig } from '../helpers/Env'

export const connectWithDB = async (
    server: Koa<DefaultState, DefaultContext>
): Promise<void> => {
    const connection = await createConnection({
        type: 'mysql',
        host: ENVConfig.HOST,
        username: ENVConfig.USER,
        password: ENVConfig.PASS,
        database: ENVConfig.NAME
    })

    await connection.synchronize(true)
        .then(() => console.log(`CONNECT TO ${ENVConfig.NAME}`))
        .catch(() => console.error('FAILED'))
    server.context.db = connection
}