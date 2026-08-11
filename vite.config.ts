import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Standard Vite + TanStack Start config (migrated off @lovable.dev/vite-tanstack-config).
// The Cloudflare plugin is only applied for builds; the dev server runs plain TanStack Start.
// We intentionally do NOT hardcode a port so the v0 preview can detect the dev server.
export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Redirect TanStack Start's server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    viteReact(),
  ];

  if (command === "build") {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    plugins.splice(2, 0, cloudflare({ viteEnvironment: { name: "ssr" } }));
  }

  return {
    server: {
      host: true,
      // Allow the v0 preview proxy host to reach the dev server.
      allowedHosts: true,
    },
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins,
  };
});
