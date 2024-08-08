import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, d as renderComponent, F as Fragment, f as renderHead } from './astro/server_33Pg35n-.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { G as GetFetch } from './fetchHelper_C0Nx4GbL.mjs';

const $$Astro$4 = createAstro();
const $$CardForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardForm;
  const { depth, isBackground = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${isBackground ? "card" : "cardNoBackdground"} ms-depth-${depth}`, "class")} data-astro-cid-g4poiezc> ${renderSlot($$result, $$slots["default"])}</div> `;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/components/CardForm.astro", void 0);

const $$Astro$3 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const { imgsrc, text, IOSStyle = false, href = "#" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`${IOSStyle ? "ios" : ""}`, "class")} data-astro-cid-mbqdmgin> ${imgsrc ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-mbqdmgin": true }, { "default": ($$result2) => renderTemplate` <img${addAttribute(imgsrc.src, "src")}${addAttribute(imgsrc.alt, "alt")} data-astro-cid-mbqdmgin> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-mbqdmgin": true })}`} ${text} </a> `;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/components/Link.astro", void 0);

const $$Astro$2 = createAstro();
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$User;
  const { user } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="user" data-astro-cid-qhpezevr> ${user ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-qhpezevr": true }, { "default": ($$result2) => renderTemplate` <img${addAttribute(user.photoUser, "src")}${addAttribute(user.fullName, "alt")} data-astro-cid-qhpezevr> <div class="circle" data-astro-cid-qhpezevr></div> ` })}` : renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": "/login", "text": "Login", "data-astro-cid-qhpezevr": true })}`} </div> `;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/components/User.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const session = await GetFetch(
    `${Astro2.url.origin}/api/user/me`
  );
  console.log(session);
  return renderTemplate`${maybeRenderHead()}<div class="content" data-astro-cid-pux6a34n> ${renderComponent($$result, "CardForm", $$CardForm, { "depth": 16, "data-astro-cid-pux6a34n": true }, { "default": ($$result2) => renderTemplate` <div class="contentNav" data-astro-cid-pux6a34n> ${renderComponent($$result2, "User", $$User, { "user": session.data, "data-astro-cid-pux6a34n": true })} <div class="linksNav" data-astro-cid-pux6a34n> <a href="#" data-astro-cid-pux6a34n>Historias</a> <a href="#" data-astro-cid-pux6a34n>Novedades</a> <a href="#" data-astro-cid-pux6a34n>Crear</a> <a href="#" data-astro-cid-pux6a34n>Mis Historias</a> </div> </div> ` })} </div> `;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/components/Navigation.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Story Blend AI",
    icon = "/logoStoryBlend.png",
    hideNav = false
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/png"${addAttribute(icon, "href")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${hideNav ? "" : renderTemplate`${renderComponent($$result, "Navigation", $$Navigation, {})}`} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/david/Documents/Repos/story-blend-ai/src/components/Layout.astro", void 0);

export { $$Layout as $ };
