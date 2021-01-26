import { Repository, DeepPartial, ObjectLiteral } from 'typeorm'
// import { ProductEntity } from '../entities/ProductEntity'
export class BaseService<TypeParameter> {
    public readonly repo: Repository<TypeParameter>

    constructor(repo: Repository<TypeParameter>) {
        this.repo = repo
    }

    async getData(): Promise<Array<TypeParameter>> {
        return await this.repo.find()
    }

    async getById(id: number, where?: ObjectLiteral): Promise<TypeParameter> {
        if (where) {
            return await this.repo.findOneOrFail(id, { where })
        } else {
            return await this.repo.findOneOrFail(id)
        }
    }

    async create(data: DeepPartial<TypeParameter>, entityAlreadyCreated?: DeepPartial<TypeParameter>):
        Promise<TypeParameter> {
        const entity: DeepPartial<TypeParameter> = entityAlreadyCreated || this.getInstance(data)
        return await this.repo.save(entity)
    }

    getInstance(data: DeepPartial<TypeParameter>): DeepPartial<TypeParameter> {
        return this.repo.create(data)
    }

    async update(id: number, body: DeepPartial<TypeParameter>): Promise<TypeParameter> {
        await this.repo.update(id, body)
        return this.getById(id)
    }

    async del(id: number): Promise<TypeParameter> {
        const entity = await this.getById(id)
        await this.repo.delete(id)
        return entity
    }
}