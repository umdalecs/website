import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

import logos from "@iconify-json/logos/icons.json";
import lucide from "@iconify-json/lucide/icons.json";
import devicon from "@iconify-json/devicon/icons.json";

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    icon({
      collections: {
        logos,
        lucide,
        devicon,
      },
    }),
  ],
});
