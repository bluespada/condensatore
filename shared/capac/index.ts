

export interface ClientResponse {
    error: boolean,
    messages: "",
    data: "",
}

class Capac {

    protected base_url : string = process.env.BASE_URL || "http://localhost:3000";

    public async rawCall(method: string, params: any[]) : Promise<ClientResponse|null>{
        const res = await fetch(
            `${this.base_url}/api/v1`,
            {
                method: "POST",
                body: JSON.stringify({
                    "proto": "3",
                    "method": method,
                    "params": params
                })
            }
        );
        if(!res.ok) return null;
        return await res.json() as ClientResponse;
    }

}

export default new Capac();
