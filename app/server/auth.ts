import { Hono, Context } from 'hono';

const app : Hono = new Hono();

app.post("/validation", async (c) => {
    const credentials = await c.req.json();
    console.log(credentials);
    return c.json({
        error: false,
        message: "Credentials validated successfully"
    });
});


export default app;