import {
    Param,
    Body,
    Get,
    Post,
    Delete,
    Patch,
    Ctx,
    Controller
} from 'routing-controllers'
import { CTX } from '../interfaces'
import { DeepPartial } from 'typeorm'
import { Service } from 'typedi'
import { CategoryService } from '../services/categoryService'
import { CategoryEntity } from '../entities/manyToMany/categoryEntity'

@Controller('/category')
@Service()
export class CategoryController {
    constructor(private readonly usersService: CategoryService) { }

    @Get()
    getAll(@Ctx() ctx: CTX) {
        return this.usersService.getData()
    }

    @Get('/:id')
    getOne(
        @Param('id') id: number,
    ): Promise<CategoryEntity> {
        return this.usersService.getById(id)
    }

    @Post()
    async post(@Body() user: DeepPartial<CategoryEntity>) {
        const instance: DeepPartial<CategoryEntity> = this.usersService.getInstance(
            user
        )
        return this.usersService.create(user, instance)
    }

    @Patch('/:id')
    async patch(@Param('id') id: number, @Body() user: Partial<CategoryEntity>) {
        const instance: DeepPartial<CategoryEntity> = this.usersService.getInstance(
            user
        )
        return this.usersService.update(id, user)
    }

    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.usersService.del(id)
    }
}