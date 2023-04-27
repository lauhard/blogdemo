import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    const currentTheme = event.cookies.get("color-theme");
    
    console.log("theme xxxxx: ", currentTheme);
    return {currentTheme};
};