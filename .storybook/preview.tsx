import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Geist, Geist_Mono } from "next/font/google";

// Tailwind v4 + the shadcn design tokens (light/dark) live here.
// Importing it makes every story render with the same styles as the app.
import "../src/app/globals.css";

// Load the same fonts as src/app/layout.tsx so `font-sans` / `font-mono`
// resolve to Geist inside stories instead of the system fallback.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // "todo" surfaces a11y violations in the panel without failing the build.
      test: "todo",
    },
  },
  // Toggle the `.dark` class (from globals.css) via the toolbar theme switcher.
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
      parentSelector: "html",
    }),
    (Story) => (
      <div
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground min-h-svh p-8 font-sans antialiased`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
