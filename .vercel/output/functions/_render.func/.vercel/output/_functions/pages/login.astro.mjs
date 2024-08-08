import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro, F as Fragment, e as renderSlot } from '../chunks/astro/server_33Pg35n-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CVjBgann.mjs';
/* empty css                                 */
import 'clsx';
import { a as getSession } from '../chunks/helpers_odyhUvGW.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { imgsrc, text, type, value, name, vertical = false, IOSStyle = false, depth = 4 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(value, "value")}${addAttribute(name, "name")}${addAttribute(type, "type")}${addAttribute(`${vertical ? "vertical" : ""} ${IOSStyle ? "ios" : ""}  ms-depth-${depth}`, "class")} data-astro-cid-vnzlvqnm> ${imgsrc ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-vnzlvqnm": true }, { "default": ($$result2) => renderTemplate` <img${addAttribute(imgsrc.src, "src")}${addAttribute(imgsrc.alt, "alt")} data-astro-cid-vnzlvqnm> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-vnzlvqnm": true })}`} <p data-astro-cid-vnzlvqnm>${text}</p> </button> `;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/components/Button.astro", void 0);

const $$List = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="lista" data-astro-cid-gt4yj4lj> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/components/List.astro", void 0);

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  const imgGoogle = {
    src: "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000",
    alt: "google logo"
  };
  return renderTemplate`${maybeRenderHead()}<div class="content" data-astro-cid-kl5b6njz> <div class="titleContent" data-astro-cid-kl5b6njz> <img src="https://img.icons8.com/?size=35&id=26218&format=png&color=000000" alt="login" data-astro-cid-kl5b6njz> <p data-astro-cid-kl5b6njz>Starts with</p> </div> <form action="/api/auth/login" method="post" data-astro-cid-kl5b6njz> ${renderComponent($$result, "List", $$List, { "data-astro-cid-kl5b6njz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "depth": 8, "vertical": false, "text": "Login With Google", "value": "google", "name": "provider", "type": "submit", "imgsrc": imgGoogle, "data-astro-cid-kl5b6njz": true })} ` })} </form> </div> <div class="footer" data-astro-cid-kl5b6njz> <img class="logo" src="/logoStoryBlend.png" alt="story blend" data-astro-cid-kl5b6njz> <div data-astro-cid-kl5b6njz> <p data-astro-cid-kl5b6njz>Story Blend AI</p> <p data-astro-cid-kl5b6njz>Welcome</p> </div> </div> `;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/components/LoginForm.astro", void 0);

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const session = await getSession();
  if (session) {
    return redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "hideNav": true, "title": "Story Blend AI - Login", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "LoginForm", $$LoginForm, { "data-astro-cid-sgpqyurt": true })} </div> ` })} `;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/pages/login.astro", void 0);

const $$file = "C:/Users/david/Documents/Repos/story-blend-ai/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
