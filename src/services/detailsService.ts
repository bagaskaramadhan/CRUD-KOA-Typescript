import 'reflect-metadata'
import { Service } from 'typedi'
import { Connection } from 'typeorm'
import { Details } from '../entities/oneToOne/details'
import { BaseService } from './BaseService'

@Service()
export class DetailsService extends BaseService<Details> {
  constructor(db: Connection) {
    super(db.getRepository(Details))
  }
}