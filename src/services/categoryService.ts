import 'reflect-metadata'
import { Service } from 'typedi'
import { Connection } from 'typeorm'
import { CategoryEntity } from '../entities/manyToMany/categoryEntity'
import { BaseService } from './BaseService'

@Service()
export class CategoryService extends BaseService<CategoryEntity> {
  constructor(db: Connection) {
    super(db.getRepository(CategoryEntity))
  }
}