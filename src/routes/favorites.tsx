import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Favorites — sage & salt" },
      { name: "description", content: "Your saved recipes, in one warm place." },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 lg:px-10 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-primary">Your kitchen</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight">Favorites</h1>
      <p className="mt-5 text-muted-foreground text-lg">
        Recipes you save will live here — your personal cookbook, kept warm.
      </p>
      <Link
        to="/recipes"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
      >
        Browse recipes to save
      </Link>
    </div>
  );
}
