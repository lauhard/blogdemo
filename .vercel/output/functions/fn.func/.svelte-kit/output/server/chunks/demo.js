import { c as create_ssr_component } from "./index.js";
const metadata = { "title": "hello" };
const Demo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>hello</h2>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"alert"</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Demo,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
