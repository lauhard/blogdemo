const handle = async ({ event, resolve }) => {
  let theme = null;
  let response = null;
  const newTheme = event.url.searchParams.get("theme");
  const currentTheme = event.cookies.get("color-theme");
  if (newTheme) {
    theme = newTheme;
  } else if (currentTheme) {
    theme = currentTheme;
  }
  if (theme) {
    response = await resolve(
      event,
      {
        transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
      }
    );
  } else {
    response = await resolve(event);
  }
  return response;
};
export {
  handle
};
