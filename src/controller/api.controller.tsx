
import { Context } from 'hono';
import { Http } from '@utils/annotation';

export default class ApiController {

    @Http.Route("/", { method: "GET", middleware: [] })
    public async index(c: Context){
        return c.render((<>Hello world</>))
    }
}