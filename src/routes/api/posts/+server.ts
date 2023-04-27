import type { RequestHandler } from "./$types";

export const GET:RequestHandler = async (event) => {
    const body: BodyInit = "blub";
    const options: ResponseInit = {
        status:200,
        headers:{

        }
    }
    const response = new Response();
    return response
}