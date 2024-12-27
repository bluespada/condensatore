import { Hono, Context } from 'hono';
import { handle } from 'hono/vercel';

/** Import all handlers */
import auth_api from './auth';

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
    app.get("/", async (c: Context) => {
        return c.json({ error: false, messages: "Hello" });
    });
    app.route('/custom/auth', auth_api);

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