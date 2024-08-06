import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [db()]
});