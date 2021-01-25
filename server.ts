const Koa = require('koa')

const server = new Koa()

server.use(async ctx => (ctx.body = "HELLO"))

server.listen(3000, () => {
    console.log('SERVER STARTED')
})