import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import auth from "auth-astro";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  security: {
    checkOrigin: true
  },
  integrations: [auth(), react(), tailwind()]
});