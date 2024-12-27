import { Hono, Context } from 'hono';
import client from '@lib/db';

const app : Hono = new Hono();

app.post("/validation", async (c) => {
    const credentials = await c.req.json();
    
    try{
        const auth = await client.auth.findFirstOrThrow({
            where: {
                email: credentials.login,
            }
        });
        return c.json({
            error: false,
            message: "Credentials validated successfully",
            data: {
                ID: auth.ID,
            }
        });
    }catch(e){
        return c.json({
            error: true,
            message: "Credentials validation failed",
            data: {
                error: e.message,
            }
        });
    }
});


export default app;