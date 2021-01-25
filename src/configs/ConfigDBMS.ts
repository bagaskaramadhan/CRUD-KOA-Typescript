import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
import { createConnection } from 'typeorm'
import { ENVConfig } from '../helpers/Env'
import { PostsEntity } from '../entities/PostEntity'
import { UserEntity } from '../entities/UserEntity'
import { ContohEntity } from '../entities/ContohEntity'
import { ProductEntity } from '../entities/ProductEntity'
import 'reflect-metadata'

export const connectWithDB = async (
    server: Koa<DefaultState, DefaultContext>
): Promise<void> => {
    const connection = await createConnection({
        type: 'mysql',
        host: ENVConfig.HOST,
        username: ENVConfig.USER,
        password: ENVConfig.PASS,
        database: ENVConfig.NAME,
        entities: [UserEntity, PostsEntity, ContohEntity, ProductEntity]
    })

    await connection.synchronize(true)
        .then(() => console.log(`CONNECT TO ${ENVConfig.NAME}`))
        .catch(() => console.error('FAILED'))
    server.context.db = connection
}