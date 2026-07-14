<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Package manager

This project uses pnpm as the package manager.

# Naming conventions

`.tsx` files should use kebab-case for the file name and PascalCase for the component definition.

# Storybook

Storybook (Vite framework, `@storybook/nextjs-vite`) is used to visualise components. Run it with `pnpm storybook`.

- Colocate stories with the component as `<component>.stories.tsx` in the same directory.
- Story files are picked up from `src/**/*.stories.tsx`; global config lives in `.storybook/`.
- Tailwind, the design tokens, the `@/*` alias, and a light/dark toggle are already wired up — just import the component and write stories. See `src/components/ui/button.stories.tsx`.
- Add `tags: ["autodocs"]` to a story's `meta` for an auto-generated docs page.

# Adding shadcn/ui components

Add shadcn components by **copying the source in by hand** — do not run the shadcn CLI (`shadcn add`).

- There is intentionally no `components.json`, and the `pnpm-workspace.yaml` makes the CLI treat this repo as a monorepo root and abort, so `shadcn add` writes nothing.
- Copy the component source from https://ui.shadcn.com/docs/components into `src/components/ui/` as a kebab-case file (e.g. `card.tsx`), then edit it freely — the source is ours to change.
- Fix imports to match this project: the `cn()` helper is at `@/lib/utils` (`@/*` maps to `src/*`).
- The runtime deps shadcn components use are already installed: `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `tw-animate-css`. Only add a dependency if a specific component genuinely needs one (e.g. a Radix primitive).
