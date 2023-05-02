import { getItem, setItem } from "$lib/utils/localStorage";
import { writable } from "svelte/store";

// const storedTheme = getItem("theme") || "dark";
// export const themeStore = writable (storedTheme);
// themeStore.subscribe(theme => {
//     setItem("theme", theme === "dark" ? "dark" : "light")
// })