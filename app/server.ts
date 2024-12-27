import { Hono } from 'hono';
import { serve, type HttpBindings } from '@hono/node-server';
import next from 'next';

const server = new Hono<{ Bindings: HttpBindings }>();
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    server.get('*', (c) => handle(c.env.incoming, c.env.outgoing));  
});

serve({
    hostname: "localhost",
    port: 9000,
    fetch: server.fetch,
}, (info) => {
    console.log(`Listening on http://${info.address}:${info.port}`);
});