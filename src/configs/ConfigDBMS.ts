import * as Koa from 'koa'
import { DefaultState, DefaultContext } from 'koa'
import { Connection, createConnection } from 'typeorm'
import { ENVConfig } from '../helpers/Env'
import { ProductEntity } from '../entities/ProductEntity'
import 'reflect-metadata'
import { Details } from '../entities/oneToOne/details'
import { Customer } from '../entities/oneToOne/customer'
import { StudentEntity } from '../entities/oneToMany/studentEntity'
import { ProjectEntity } from '../entities/oneToMany/projectEntity'
import { ValueEntity } from '../entities/oneToMany/valueEntity'
import { CategoryEntity } from '../entities/manyToMany/categoryEntity'
import { Question } from '../entities/manyToMany/questionsEntity'

export const connectWithDB = async (
    server: Koa<DefaultState, DefaultContext>
): Promise<void> => {
    const connection: Connection = await createConnection({
        type: 'mysql',
        host: ENVConfig.HOST,
        username: ENVConfig.USER,
        password: ENVConfig.PASS,
        database: ENVConfig.NAME,
        entities: [ProductEntity, Details,Customer, StudentEntity, ProjectEntity, ValueEntity, CategoryEntity,Question]
    })

    await connection.synchronize(true)
        .then(() => console.log(`CONNECT TO ${ENVConfig.NAME}`))
        .catch(() => console.error('FAILED'))
    server.context.db = connection
}