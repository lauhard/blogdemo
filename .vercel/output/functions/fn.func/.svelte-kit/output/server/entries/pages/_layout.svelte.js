import { c as create_ssr_component, b as createEventDispatcher, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import "devalue";
/* empty css                                               */const Navigation_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-1dp5mnw{width:100%;margin:0px;box-sizing:border-box;overflow:hidden}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-1dp5mnw"><ul>${slots.default ? slots.default({}) : ``}
        <li><strong>Lauhard.dev</strong></li></ul>
    <ul><li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li></ul>
</nav>`;
});
const css$2 = {
  code: ".form-wrapper.svelte-kytqok.svelte-kytqok{display:flex;justify-content:center;width:var(--form-width, 80%);height:var(--form-height, auto);margin:0 auto}.form-wrapper.svelte-kytqok form.svelte-kytqok{width:100%;height:100%}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action = "" } = $$props;
  createEventDispatcher();
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  $$result.css.add(css$2);
  return `<div class="form-wrapper svelte-kytqok"><form method="POST"${add_attribute("action", action, 0)} class="svelte-kytqok">${slots.default ? slots.default({}) : ``}</form>
   
</div>`;
});
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { iconStyle = "" } = $$props;
  let { width = "100%" } = $$props;
  let { height = "100%" } = $$props;
  let { viewBox = "0 0 267 267" } = $$props;
  if ($$props.iconStyle === void 0 && $$bindings.iconStyle && iconStyle !== void 0)
    $$bindings.iconStyle(iconStyle);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg class="moon"${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} xmlns="http://www.w3.org/2000/svg" style="${"stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5; min-width:" + escape(width, true) + "; min-height:" + escape(height, true) + "; box-sizing:border-box;"}"><path d="M255.84,190.351c-15.634,31.727 -44.139,56.947 -80.822,67.284c-68.603,19.33 -139.995,-20.673 -159.326,-89.277c-19.33,-68.604 20.673,-139.996 89.277,-159.326c20.691,-5.83 41.635,-6.263 61.338,-2.14c-2.28,0.482 -4.553,1.042 -6.823,1.682c-55.904,15.752 -88.502,73.927 -72.75,129.831c15.753,55.903 73.928,88.501 129.832,72.749c14.909,-4.201 28.161,-11.419 39.274,-20.803Z" style="${"stroke-width:9px; " + escape(iconStyle, true)}"></path></svg>`;
});
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { iconStyle = "" } = $$props;
  let { width = "100%" } = $$props;
  let { height = "100%" } = $$props;
  let { viewBox = "0 0 267 267" } = $$props;
  if ($$props.iconStyle === void 0 && $$bindings.iconStyle && iconStyle !== void 0)
    $$bindings.iconStyle(iconStyle);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg class="sun"${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} xmlns="http://www.w3.org/2000/svg" style="${"stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5; min-width:" + escape(width, true) + "; min-height:" + escape(height, true) + "; box-sizing:border-box;"}"><g><path d="M106.318,61.161l-0.079,-0l27.094,-54.188l27.094,54.188l-0.078,-0c-8.362,-3.321 -17.477,-5.146 -27.016,-5.146c-9.538,0 -18.653,1.825 -27.015,5.146Z" style="${"stroke-width:8px; " + escape(iconStyle, true)}"></path><path d="M57.174,120.729l-0.039,0.068l-33.381,-50.558l60.475,3.63l-0.04,0.067c-7.056,5.582 -13.194,12.563 -17.964,20.824c-4.769,8.26 -7.746,17.067 -9.051,25.969Z" style="${"stroke-width:8px; " + escape(iconStyle, true)}"></path><path d="M84.189,193.073l0.04,0.067l-60.475,3.63l33.381,-50.558l0.039,0.068c1.305,8.902 4.282,17.709 9.051,25.969c4.77,8.261 10.908,15.242 17.964,20.824Z" style="${"stroke-width:8px; " + escape(iconStyle, true)}"></path><path d="M160.349,205.848l0.078,0l-27.094,54.188l-27.094,-54.188l0.079,0c8.362,3.321 17.477,5.146 27.015,5.146c9.539,-0 18.654,-1.825 27.016,-5.146Z" style="${"stroke-width:8px; " + escape(iconStyle, true)}"></path><path d="M209.493,146.28l0.039,-0.068l33.381,50.558l-60.475,-3.63l0.039,-0.067c7.057,-5.582 13.195,-12.563 17.964,-20.824c4.769,-8.26 7.746,-17.067 9.052,-25.969Z" style="${"stroke-width:8px; " + escape(iconStyle, true)}"></path><path d="M182.477,73.936l-0.039,-0.067l60.475,-3.63l-33.381,50.558l-0.039,-0.068c-1.306,-8.902 -4.283,-17.709 -9.052,-25.969c-4.769,-8.261 -10.907,-15.242 -17.964,-20.824Z" style="${"stroke-width:8px; " + escape(iconStyle, true)}"></path><circle cx="133" cy="133" r="52" style="${"stroke-width:10px; " + escape(iconStyle, true)}"></circle></g></svg>`;
});
const ThemeToggler_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".toggler.svelte-ns139v{width:2rem;height:2rem;border-radius:50%;background-color:rgb(2, 2, 2);display:flex;justify-content:center;align-items:center;overflow:hidden;box-sizing:border-box;border-style:none;box-shadow:none}.sun.svelte-ns139v,.moon.svelte-ns139v{width:2rem;height:2rem;transform:translate(0px, 0px) rotate(0deg);display:flex;justify-content:center;align-items:center;transition:all ease-in-out 0.2s;position:relative}.sun.svelte-ns139v{transform:translate(0px, 0px) rotate(0deg);transform-origin:center;color:#f0c714 !important}.sun.svelte-ns139v:hover{transform-origin:center;margin:0;padding:0;transition:transform ease-in-out 0.5s}.moon.svelte-ns139v{transform:translate(-50px, 30px) rotate(-180deg);transform-origin:bottom center;width:0px;transition:all ease-in-out 0.1s;color:#1567c5 !important;opacity:1}.fade-out.svelte-ns139v{transform:translate(20px, -60px) rotate(180deg);transform-origin:bottom right;transition:all ease-in-out 0.1s;opacity:0;width:0px}.fade-in.svelte-ns139v{transform:translate(0px, 0px) rotate(0deg);transition:all ease-in-out 0.2s;opacity:1;width:auto}",
  map: null
};
const ThemeToggler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fadeout;
  let { themeState = "dark" } = $$props;
  if ($$props.themeState === void 0 && $$bindings.themeState && themeState !== void 0)
    $$bindings.themeState(themeState);
  $$result.css.add(css$1);
  fadeout = themeState == "dark" ? true : false;
  return `<div style="display: contents; --form-height:2rem;">${validate_component(Form, "Form").$$render(
    $$result,
    {
      action: "/blog?/setTheme&theme=" + themeState
    },
    {},
    {
      default: () => {
        return `<button type="submit" title="Toggles light & dark" aria-label="auto" aria-live="polite" class="toggler svelte-ns139v"><div class="${["moon svelte-ns139v", fadeout == true ? "fade-in" : ""].join(" ").trim()}">${validate_component(Moon, "Moon").$$render(
          $$result,
          {
            width: "1rem",
            height: "1rem",
            iconStyle: ""
          },
          {},
          {}
        )}</div>
        <div class="${["sun svelte-ns139v", fadeout == true ? "fade-out" : ""].join(" ").trim()}">${validate_component(Sun, "Sun").$$render(
          $$result,
          {
            width: "1.1rem",
            height: "1.1rem",
            iconStyle: ""
          },
          {},
          {}
        )}</div></button>`;
      }
    }
  )}</div>`;
});
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-mjjxnj{width:100%;height:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let themeState = data.currentTheme;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="app svelte-mjjxnj">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {
    default: () => {
      return `<li>${validate_component(ThemeToggler, "ThemeToggler").$$render($$result, { themeState }, {}, {})}</li>`;
    }
  })}
    ${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
