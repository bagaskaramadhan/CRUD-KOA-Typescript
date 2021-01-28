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
import { CTX } from '../../interfaces'
import { DeepPartial } from 'typeorm'
import { Service } from 'typedi'
import { DetailsService } from '../../services/detailsService'
import { Details } from '../../entities/oneToOne/details'

@Controller('/details')
@Service()
export class DetailsController {
    constructor(private readonly usersService: DetailsService) { }

    @Get()
    getAll(@Ctx() ctx: CTX) {
        return this.usersService.getData()
    }

    @Get('/:id')
    getOne(
        @Param('id') id: number,
    ): Promise<Details> {
        return this.usersService.getById(id)
    }

    @Post()
    async post(@Body() user: DeepPartial<Details>) {
        const instance: DeepPartial<Details> = this.usersService.getInstance(
            user
        )
        return this.usersService.create(user, instance)
    }

    @Patch('/:id')
    async patch(@Param('id') id: number, @Body() user: Partial<Details>) {
        const instance: DeepPartial<Details> = this.usersService.getInstance(
            user
        )
        return this.usersService.update(id, user)
    }

    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.usersService.del(id)
    }
}