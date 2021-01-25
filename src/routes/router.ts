import * as KoaRouters from 'koa-router'
export const router = new KoaRouters();

router
.get("/", (ctx) => (ctx.body = "HELLOs"));
