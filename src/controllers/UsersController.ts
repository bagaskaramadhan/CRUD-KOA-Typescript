import {
    Param,
    Body,
    Get,
    Post,
    Delete,
    Patch,
    Ctx,
    JsonController,
    // UnauthorizedError,
    // Authorized,
    // CurrentUser,
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
        // ctx.db.getRepository(ProductEntity).find()
        return this.usersService.getData()
    }

    @Get('/:id')
    // @Authorized()
    getOne(
        @Param('id') id: number,
        // @CurrentUser() user: DeepPartial<ProductEntity>
    ): Promise<ProductEntity> {
        // console.log(user)
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
    // @Authorized()
    async patch(@Param('id') id: number, @Body() user: Partial<ProductEntity>) {
        const instance: DeepPartial<ProductEntity> = this.usersService.getInstance(
            user
        )
        return this.usersService.update(id, user)
    }

    @Delete('/:id')
    // @Authorized()
    remove(@Param('id') id: number) {
        return this.usersService.del(id)
    }
}