import { MiddlewareContext } from '@app/src/core/middleware';

export default async (ctx: MiddlewareContext) => {
    ctx.redirect("/signin");
    ctx.next();
}
