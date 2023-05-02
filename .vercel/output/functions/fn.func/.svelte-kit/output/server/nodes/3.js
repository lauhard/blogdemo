import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/entry/blog-page.svelte.3e87e39b.js","_app/immutable/chunks/index.118f0f06.js"];
export const stylesheets = [];
export const fonts = [];
