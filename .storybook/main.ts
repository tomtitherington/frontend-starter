import type { StorybookConfig } from "@storybook/nextjs-vite";
import { fileURLToPath } from "node:url";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  viteFinal: async (viteConfig) => {
    // Resolve the `@/*` -> `src/*` alias (matches tsconfig.json paths) so
    // component imports like `@/lib/utils` work inside Storybook.
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    };
    return viteConfig;
  },
};

export default config;
