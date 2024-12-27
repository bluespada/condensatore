import { Hono } from 'hono';
import ServerHandler from '@server/index';

/**
 * Runtime environment for the API routes.
 * This specifies that the routes will run in an edge environment.
 */
export const runtime = 'nodejs';

// Create a new Hono application with a base path of '/api'
const app = new Hono().basePath('/api');

/**
 * Exported HTTP methods for handling requests.
 * These methods are bound to the ServerHandler, which processes the requests.
 * 
 * - GET: Handles GET requests.
 * - POST: Handles POST requests.
 * - PUT: Handles PUT requests.
 * - DELETE: Handles DELETE requests.
 * - PATCH: Handles PATCH requests.
 * - HEAD: Handles HEAD requests.
 * - OPTIONS: Handles OPTIONS requests.
 */
export const { GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS } = ServerHandler(app);
