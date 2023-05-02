import { getPosts } from "$lib/utils";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
   const files =  await getPosts();
    return{
        files
    }
};

export const actions: Actions = {
    setTheme: async (event) => {
        const response={
            success:false,
            zodError:{},
            prismaError:""
        }
        const { url, cookies } = event

        const theme = url.searchParams.get("theme");
        
        console.log("actions setTheme theme: ", theme);

        const opts =  {
            path: '/',
            maxAge: 60 * 60 * 24 * 365
        }

        if(theme) {
            cookies.set("color-theme", theme, opts)
        }
        return response
    },
    
};