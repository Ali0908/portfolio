import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Ali0908.github.io',
  base: 'dev-portfolio-main',
  trailingSlash: "always",
  integrations: [tailwind()],
  env: {
    schema: {
      PUBLIC_MAIL: envField.string({
        context: "client",
        access: "public"
      })
    }
  }
});
