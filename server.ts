const Koa = require('koa')
const KoaRouter = require('koa-router')

const server = new Koa();
const router = new KoaRouter();

router.get("/get", (ctx) => (ctx.body = "INI Router GET"));

server.use(router.routes()).use(router.allowedMethods());

server.listen(3000, () => {
    console.log("SERVER STARTED");
});
