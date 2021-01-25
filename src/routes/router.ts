import * as KoaRouters from 'koa-router'
export const router = new KoaRouters();

router
.get("/users/API", (ctx) => (ctx.body = "Mr. Postman"));
