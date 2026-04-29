import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { recipes } from "@/lib/recipes";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — sage & salt" },
      { name: "description", content: "Curated recipe collections — weeknight wins, slow Sundays, plant-forward, and more." },
    ],
  }),
  component: CollectionsPage,
});

const collections = [
  { name: "Weeknight Wins", tagline: "Under 30 minutes, no compromise.", filter: (r: typeof recipes[number]) => r.time <= 30 },
  { name: "Slow Sundays", tagline: "Long, generous, worth the wait.", filter: (r: typeof recipes[number]) => r.time >= 45 },
  { name: "Plant Forward", tagline: "Vegetables in the lead role.", filter: (r: typeof recipes[number]) => r.diet.some((d) => /veg/i.test(d)) },
  { name: "Sweet Endings", tagline: "Desserts worth saving room for.", filter: (r: typeof recipes[number]) => r.category === "Desserts" },
];

export function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10 py-14">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Curated</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight">Collections.</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Hand-picked sets of recipes for the way you actually cook — fast, slow, plant-forward, sweet.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {collections.map((c, idx) => {
          const items = recipes.filter(c.filter).slice(0, 4);
          return (
            <Link
              key={c.name}
              to="/recipes"
              className={`group relative overflow-hidden rounded-[2rem] p-8 min-h-[340px] flex flex-col justify-between border border-border transition hover:shadow-warm
                ${idx % 2 === 0 ? "bg-foreground text-background" : "bg-secondary"}`}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-70">Collection · {items.length} recipes</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">{c.name}</h2>
                <p className="mt-2 max-w-sm opacity-80">{c.tagline}</p>
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div className="flex -space-x-3">
                  {items.map((r) => (
                    <img
                      key={r.slug}
                      src={r.image}
                      alt=""
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-14 w-14 rounded-full object-cover border-2 border-background"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium opacity-90 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
