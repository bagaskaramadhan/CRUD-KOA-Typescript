import 'reflect-metadata'
import { Service } from 'typedi'
import { Connection } from 'typeorm'
import { ProductEntity } from '../entities/ProductEntity'
import { BaseService } from './BaseService'

@Service()
export class UsersService extends BaseService<ProductEntity> {
  constructor(db: Connection) {
    super(db.getRepository(ProductEntity))
  }
}