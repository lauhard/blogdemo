import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/entry/_layout.svelte.0a546a65.js","_app/immutable/chunks/index.118f0f06.js","_app/immutable/chunks/Form.svelte_svelte_type_style_lang.ef4d967b.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.6ae43439.js"];
export const stylesheets = ["_app/immutable/assets/_layout.612c25ff.css","_app/immutable/assets/Form.03e3c6c4.css"];
export const fonts = [];
