This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Adding shadcn/ui components

This project uses shadcn/ui by **copying component source in manually** rather than the shadcn CLI, so the code is ours to own and edit.

Do **not** run `shadcn add` — there is no `components.json`, and the `pnpm-workspace.yaml` causes the CLI to treat the repo as a monorepo root and bail without writing anything.

To add a component:

1. Copy its source from [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components) into `src/components/ui/` as a kebab-case file (e.g. `card.tsx`).
2. Point any `cn()` import at `@/lib/utils`.
3. Edit it however you like.

The runtime packages shadcn components rely on (`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `tw-animate-css`) are already installed. The `shadcn` CLI package in `package.json` is not needed for this workflow.

## Storybook

Components can be developed and visualised in isolation with [Storybook](https://storybook.js.org).

```bash
pnpm storybook        # dev server on http://localhost:6006
pnpm build-storybook  # static build into storybook-static/
```

Setup notes:

- Uses the **Vite-based** framework (`@storybook/nextjs-vite`), so it runs on Vite rather than the customised Next.js build.
- Tailwind v4 and the shadcn design tokens work in stories because `.storybook/preview.tsx` imports `src/app/globals.css` and Vite reuses the existing `postcss.config.mjs`.
- The toolbar has a **light/dark theme toggle** wired to the `.dark` class (via `@storybook/addon-themes`).
- The `@/*` import alias is resolved in `.storybook/main.ts`.

Write a story next to its component as `*.stories.tsx` (see `src/components/ui/button.stories.tsx` for the pattern). Add `tags: ["autodocs"]` to generate a docs page automatically.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
