const koa = require('koa')
const server = new koa()
const PORT = 3000
server.use(async ctx => ctx.body = {
    msg: 'HELLO'
})

server.listen(PORT, () => {
    console.log(`CONNECT ON PORT ${PORT}`)
})