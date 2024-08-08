import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_33Pg35n-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CVjBgann.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/pages/index.astro", void 0);

const $$file = "C:/Users/david/Documents/Repos/story-blend-ai/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
