import { c as create_ssr_component, h as each, e as escape } from "../../../chunks/index.js";
const getItem = (key) => {
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const files = data.files;
  let x = getItem();
  console.log(x);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<ul>${each(files, (file) => {
    return `<li><a href="${"/blog/" + escape(file.path, true)}">${escape(file.metadata.title)}</a>
        </li>`;
  })}
</ul>`;
});
export {
  Page as default
};
