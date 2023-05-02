import { browser } from "$app/environment";

export const setItem = (key:string, value:string) =>{
    if(browser)
        localStorage.setItem(key, value);
}

export const getItem = (key:string) => {
    if(browser)
        return localStorage.getItem(key);
}

export const deleteItem = (key:string) => {
    if(browser)
        localStorage.removeItem(key);
}