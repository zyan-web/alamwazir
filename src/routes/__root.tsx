import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">404</p>
        <h1 className="mt-4 font-display text-5xl">Off the menu.</h1>
        <p className="mt-3 text-muted-foreground">
          That page seems to have wandered out of the kitchen.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Back to the table
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sage & salt — A slow recipe journal" },
      {
        name: "description",
        content:
          "Discover, save and cook seasonal recipes — searchable by ingredient, cuisine and dietary preference.",
      },
      { property: "og:title", content: "Sage & salt — A slow recipe journal" },
      { property: "og:description", content: "Recipe Haven is a modern web app for discovering, creating, and managing recipes with an intuitive interface." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sage & salt — A slow recipe journal" },
      { name: "description", content: "Recipe Haven is a modern web app for discovering, creating, and managing recipes with an intuitive interface." },
      { name: "twitter:description", content: "Recipe Haven is a modern web app for discovering, creating, and managing recipes with an intuitive interface." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5b17479e-5bcb-46b1-97f5-f4e083a0aa61/id-preview-5a2f856a--14929f6d-1e69-403f-8060-a1cab53a1cfa.lovable.app-1777466306593.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5b17479e-5bcb-46b1-97f5-f4e083a0aa61/id-preview-5a2f856a--14929f6d-1e69-403f-8060-a1cab53a1cfa.lovable.app-1777466306593.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
