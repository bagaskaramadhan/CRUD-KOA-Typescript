import 'reflect-metadata'
import { Service } from 'typedi'
import { Connection } from 'typeorm'
import { Question } from '../entities/manyToMany/questionsEntity'
import { BaseService } from './BaseService'

@Service()
export class QuestionService extends BaseService<Question> {
  constructor(db: Connection) {
    super(db.getRepository(Question))
  }
}