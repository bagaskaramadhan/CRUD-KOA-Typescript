import 'reflect-metadata'
import { Service } from 'typedi'
import { Connection } from 'typeorm'
import { Customer } from '../entities/oneToOne/customer'
import { BaseService } from './BaseService'

@Service()
export class CustomerService extends BaseService<Customer> {
  constructor(db: Connection) {
    super(db.getRepository(Customer))
  }
}