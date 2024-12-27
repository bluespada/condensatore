import { Hono, Context } from 'hono';
import { handle } from 'hono/vercel';

/**
 * Sets up the handlers for the Hono application.
 * This function defines the routing for the application and handles various HTTP methods.
 * 
 * @param {Hono} app - The Hono application instance.
 * @returns {Object} - An object containing handlers for different HTTP methods.
 */
export default function handlers(app: Hono) {
    /**
     * Define additional routing here.
     */

    // Root route handler
    app.get("/", (ctx: Context) => {
        return ctx.json({
            error: false,
        });
    });

    // Create a single handler for all HTTP methods
    const allMethodsHandler = handle(app);

    // Return handlers for various HTTP methods
    return {
        GET: allMethodsHandler,
        POST: allMethodsHandler,
        PUT: allMethodsHandler,
        DELETE: allMethodsHandler,
        PATCH: allMethodsHandler,
        HEAD: allMethodsHandler,
        OPTIONS: allMethodsHandler,
    };
}