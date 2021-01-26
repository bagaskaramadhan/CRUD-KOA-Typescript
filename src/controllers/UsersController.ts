import {
    Param,
    Body,
    Get,
    Post,
    Delete,
    Patch,
    Ctx,
    JsonController
} from 'routing-controllers'
import { CTX } from '../interfaces'
import { UsersService } from '../services'
import { ProductEntity } from '../entities/ProductEntity'
import { DeepPartial } from 'typeorm'
import { Service } from 'typedi'

@JsonController('/users')
@Service()
export class UnitControllers {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAll(@Ctx() ctx: CTX) {
        return this.usersService.getData()
    }

    @Get('/:id')
    getOne(
        @Param('id') id: number,
    ): Promise<ProductEntity> {
        return this.usersService.getById(id)
    }

    @Post()
    async post(@Body() user: DeepPartial<ProductEntity>) {
        const instance: DeepPartial<ProductEntity> = this.usersService.getInstance(
            user
        )
        return this.usersService.create(user, instance)
    }

    @Patch('/:id')
    async patch(@Param('id') id: number, @Body() user: Partial<ProductEntity>) {
        const instance: DeepPartial<ProductEntity> = this.usersService.getInstance(
            user
        )
        return this.usersService.update(id, user)
    }

    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.usersService.del(id)
    }
}