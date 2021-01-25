import { Controller, Param, Body, Get, Post, Delete, Patch, Ctx } from 'routing-controllers'
// import { ProductEntity } from '../entities/ProductEntity'
import { CTX } from '../interfaces/CTXInterfaces'

@Controller('/users/API')
export class UserController {

    @Get('/GetAll')
    getAll(@Ctx() ctx: CTX) {
        // ctx.db.getRepository(ProductEntity).find
        return {
            msg: 'Return GetAll'
        }
    }

    @Get('/GetID/:id')
    getOne(@Param('id') id: number) {
        return `Return ID ${id} By ID`
    }

    @Post('/Insert')
    post(@Body() user: any) {
        return {
            saved: true,
            user
        }
    }

    @Patch('/Update/:id')
    put(@Param('id') id: number, @Body() user: any) {
        return {
            update: true,
            user,
            id
        }
    }

    @Delete('/Remove/:id')
    remove(@Param('id') id: number) {
        return `Remove id ${id}`
    }

}