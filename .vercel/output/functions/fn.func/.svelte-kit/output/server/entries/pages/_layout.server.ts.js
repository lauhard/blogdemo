const load = async (event) => {
  const currentTheme = event.cookies.get("color-theme");
  console.log("theme xxxxx: ", currentTheme);
  return { currentTheme };
};
export {
  load
};
