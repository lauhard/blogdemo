const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async (event) => {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/blogposts/demo-copy.md": () => import("../../../../chunks/demo-copy.js").then((n) => n._), "../../../lib/blogposts/demo.md": () => import("../../../../chunks/demo.js").then((n) => n._) }), `../../../lib/blogposts/${event.params.slug}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
};
export {
  load
};
