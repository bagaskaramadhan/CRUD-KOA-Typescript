// import 'reflect-metadata'
import { Controller, Param, Body, Get, Post, Delete, Patch, Ctx } from 'routing-controllers'
// import { ProductEntity } from '../entities/ProductEntity'
// import { CTX } from '../interfaces/CTXInterfaces'
// import { UserServices } from '../services'

@Controller('/users')
export class UsersController {
    // constructor(private readonly userServices: UserServices) {}
    @Get('/GetAll')
    getAll() {
        // getAll(@Ctx() ctx: CTX) {
        // ctx.db.getRepository(ProductEntity).find
        return {
            koa: 'HI'
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