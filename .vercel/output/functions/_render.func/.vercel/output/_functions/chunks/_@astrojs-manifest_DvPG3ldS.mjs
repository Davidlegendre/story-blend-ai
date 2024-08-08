import 'cookie';
import 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_33Pg35n-.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/david/Documents/Repos/story-blend-ai/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/callback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/callback\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/callback.ts","pathname":"/api/auth/callback","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/login.ts","pathname":"/api/auth/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/logout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/logout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/logout.ts","pathname":"/api/auth/logout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/createuser","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/createUser\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"createUser","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/user/createUser.ts","pathname":"/api/user/createUser","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/me","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/me\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"me","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/user/me.ts","pathname":"/api/user/me","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/[mepublic]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"mepublic","dynamic":true,"spread":false}]],"params":["mepublic"],"component":"src/pages/api/user/[mepublic].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button{border:0px;background-color:#fff;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:10px;padding:1px 15px;cursor:pointer;transition:cubic-bezier(.785,.135,.15,.86) .2s}button img{width:20px}button p{font-size:.8rem}button:hover{background-color:#0000000f;transition:cubic-bezier(.785,.135,.15,.86) .2s}p,h1{font-family:Segoe UI Semibold;margin:0xp;padding:0}h1{margin:0;padding:0}.ms-depth-16{box-shadow:0 6.4px 14.4px #0002,0 1.2px 3.6px #0000001c}.ms-depth-4{box-shadow:0 1.6px 3.6px #0002,0 .3px .9px #0000001c}.ms-depth-8{box-shadow:0 3.2px 7.2px #0002,0 .6px 1.8px #0000001c}.ms-depth-64{box-shadow:0 25.6px 57.6px #00000038,0 4.8px 14.4px #0000002e}a{color:#000;text-decoration:none}a{border:0px;background-color:#fff;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:10px;padding:5px 15px;cursor:pointer;transition:cubic-bezier(.785,.135,.15,.86) .2s}a img{width:20px}a p{font-size:.8rem}a:hover{background-color:#0000000f;transition:cubic-bezier(.785,.135,.15,.86) .2s}.card[data-astro-cid-g4poiezc]{background-color:#fff;padding:10px;border-radius:10px}.cardNoBackdground[data-astro-cid-g4poiezc]{padding:10px;border-radius:10px}.ios[data-astro-cid-mbqdmgin]{background-color:#0000001a;backdrop-filter:blur(13px);color:#fff}.ios[data-astro-cid-mbqdmgin]:hover{background-color:#0003;transition:cubic-bezier(.785,.135,.15,.86) .2s}.user[data-astro-cid-qhpezevr] img[data-astro-cid-qhpezevr]{height:33px;border-radius:50%}.user[data-astro-cid-qhpezevr]{display:flex;align-items:center;gap:10px;width:max-content;position:relative}.circle[data-astro-cid-qhpezevr]{width:10px;height:10px;background-color:#d6d6d6;border-radius:50%;border:2px solid white;position:absolute;bottom:-1px;right:-1px}.content[data-astro-cid-pux6a34n]{left:10px;top:10px;margin-top:10px;right:10px;position:sticky;display:flex;justify-content:center}.linksNav[data-astro-cid-pux6a34n]{display:flex;gap:10px}.contentNav[data-astro-cid-pux6a34n]{display:flex;align-items:center;gap:10px}body{margin:0;padding:0}\n.vertical[data-astro-cid-vnzlvqnm]{flex-direction:column;padding:10px 10px 0;gap:5px}.vertical[data-astro-cid-vnzlvqnm] img[data-astro-cid-vnzlvqnm]{height:80px;width:80px}.ios[data-astro-cid-vnzlvqnm]{background-color:#0000001a;backdrop-filter:blur(13px);color:#fff}.ios[data-astro-cid-vnzlvqnm]:hover{background-color:#0003;transition:cubic-bezier(.785,.135,.15,.86) .2s}.lista[data-astro-cid-gt4yj4lj]{gap:10px;display:flex;flex-wrap:wrap;justify-content:center}.titleContent[data-astro-cid-kl5b6njz]{display:flex;align-items:center;gap:10px;justify-content:center}.logo[data-astro-cid-kl5b6njz]{height:50px}.content[data-astro-cid-kl5b6njz] p[data-astro-cid-kl5b6njz]{font-size:1.5rem;color:#000}.footer[data-astro-cid-kl5b6njz]{position:absolute;bottom:20px;display:flex;gap:10px;align-items:center;justify-content:center;width:100%}.footer[data-astro-cid-kl5b6njz] p[data-astro-cid-kl5b6njz]{font-size:.9rem;margin:0}.footer[data-astro-cid-kl5b6njz] p[data-astro-cid-kl5b6njz]:nth-child(2){font-size:1.4rem}.content[data-astro-cid-sgpqyurt]{display:flex;justify-content:center;align-items:center;height:100vh}\n"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button{border:0px;background-color:#fff;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:10px;padding:1px 15px;cursor:pointer;transition:cubic-bezier(.785,.135,.15,.86) .2s}button img{width:20px}button p{font-size:.8rem}button:hover{background-color:#0000000f;transition:cubic-bezier(.785,.135,.15,.86) .2s}p,h1{font-family:Segoe UI Semibold;margin:0xp;padding:0}h1{margin:0;padding:0}.ms-depth-16{box-shadow:0 6.4px 14.4px #0002,0 1.2px 3.6px #0000001c}.ms-depth-4{box-shadow:0 1.6px 3.6px #0002,0 .3px .9px #0000001c}.ms-depth-8{box-shadow:0 3.2px 7.2px #0002,0 .6px 1.8px #0000001c}.ms-depth-64{box-shadow:0 25.6px 57.6px #00000038,0 4.8px 14.4px #0000002e}a{color:#000;text-decoration:none}a{border:0px;background-color:#fff;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:10px;padding:5px 15px;cursor:pointer;transition:cubic-bezier(.785,.135,.15,.86) .2s}a img{width:20px}a p{font-size:.8rem}a:hover{background-color:#0000000f;transition:cubic-bezier(.785,.135,.15,.86) .2s}.card[data-astro-cid-g4poiezc]{background-color:#fff;padding:10px;border-radius:10px}.cardNoBackdground[data-astro-cid-g4poiezc]{padding:10px;border-radius:10px}.ios[data-astro-cid-mbqdmgin]{background-color:#0000001a;backdrop-filter:blur(13px);color:#fff}.ios[data-astro-cid-mbqdmgin]:hover{background-color:#0003;transition:cubic-bezier(.785,.135,.15,.86) .2s}.user[data-astro-cid-qhpezevr] img[data-astro-cid-qhpezevr]{height:33px;border-radius:50%}.user[data-astro-cid-qhpezevr]{display:flex;align-items:center;gap:10px;width:max-content;position:relative}.circle[data-astro-cid-qhpezevr]{width:10px;height:10px;background-color:#d6d6d6;border-radius:50%;border:2px solid white;position:absolute;bottom:-1px;right:-1px}.content[data-astro-cid-pux6a34n]{left:10px;top:10px;margin-top:10px;right:10px;position:sticky;display:flex;justify-content:center}.linksNav[data-astro-cid-pux6a34n]{display:flex;gap:10px}.contentNav[data-astro-cid-pux6a34n]{display:flex;align-items:center;gap:10px}body{margin:0;padding:0}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/david/Documents/Repos/story-blend-ai/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/david/Documents/Repos/story-blend-ai/src/pages/login.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth/callback@_@ts":"pages/api/auth/callback.astro.mjs","\u0000@astro-page:src/pages/api/auth/login@_@ts":"pages/api/auth/login.astro.mjs","\u0000@astro-page:src/pages/api/auth/logout@_@ts":"pages/api/auth/logout.astro.mjs","\u0000@astro-page:src/pages/api/user/createUser@_@ts":"pages/api/user/createuser.astro.mjs","\u0000@astro-page:src/pages/api/user/me@_@ts":"pages/api/user/me.astro.mjs","\u0000@astro-page:src/pages/api/user/[mepublic]@_@ts":"pages/api/user/_mepublic_.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/david/Documents/Repos/story-blend-ai/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DT93hIi2.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/fondologin2.jpg","/logoStoryBlend.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { DEFAULT_404_ROUTE as D, default404Instance as d, ensure404Route as e, manifest as m };
