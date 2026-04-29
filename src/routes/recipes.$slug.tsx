import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Flame, Heart, Printer, Share2, Users, Utensils } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { getRecipe, recipes, type Recipe } from "@/lib/recipes";
import { RecipeCard } from "@/components/recipe-card";

export const Route = createFileRoute("/recipes/$slug")({
  loader: ({ params }): { recipe: Recipe } => {
    const recipe = getRecipe(params.slug);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.recipe.title} — sage & salt` },
            { name: "description", content: loaderData.recipe.tagline },
            { property: "og:title", content: loaderData.recipe.title },
            { property: "og:description", content: loaderData.recipe.tagline },
            { property: "og:image", content: loaderData.recipe.image },
            { name: "twitter:image", content: loaderData.recipe.image },
          ],
        }
      : {},
  component: RecipePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl">Recipe not found</h1>
      <Link to="/recipes" className="mt-6 inline-block text-primary underline">
        Back to all recipes
      </Link>
    </div>
  ),
});

function RecipePage() {
  const { recipe } = Route.useLoaderData();
  const [done, setDone] = useState<Set<number>>(new Set());
  const [saved, setSaved] = useState(false);
  const related = recipes.filter((r) => r.slug !== recipe.slug).slice(0, 3);

  const toggle = (i: number) => {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <article>
      {/* HERO */}
      <header className="relative">
        <div className="absolute inset-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 lg:px-10 pt-10 pb-24 md:pt-16 md:pb-32 text-background">
          <Link
            to="/recipes"
            className="inline-flex items-center gap-1.5 text-sm text-background/80 hover:text-background"
          >
            <ArrowLeft className="h-4 w-4" /> All recipes
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-background/70">
              {recipe.cuisine} · {recipe.category}
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              {recipe.title}
            </h1>
            <p className="mt-4 text-lg text-background/85 max-w-2xl text-pretty">{recipe.tagline}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Stat icon={Clock} label={`${recipe.time} min`} />
              <Stat icon={Users} label={`Serves ${recipe.servings}`} />
              <Stat icon={Utensils} label={recipe.difficulty} />
              <Stat icon={Flame} label={`${recipe.calories} kcal`} />
            </div>
          </motion.div>
        </div>
      </header>

      {/* ACTIONS BAR */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-5 lg:px-10 py-4 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-muted-foreground">
            By <span className="text-foreground font-medium">{recipe.author}</span>
          </p>
          <div className="flex items-center gap-2">
            <ActionButton onClick={() => setSaved((v) => !v)} active={saved} icon={Heart} label={saved ? "Saved" : "Save"} />
            <ActionButton icon={Share2} label="Share" />
            <ActionButton icon={Printer} label="Print" />
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto max-w-5xl px-5 lg:px-10 py-14 grid lg:grid-cols-12 gap-12">
        {/* Ingredients */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Ingredients</p>
            <h3 className="mt-2 font-display text-2xl">For {recipe.servings}</h3>
            <ul className="mt-5 space-y-3">
              {recipe.ingredients.map((ing) => (
                <li key={ing.name} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-2.5">
                  <span className="text-sm">{ing.name}</span>
                  <span className="text-sm text-muted-foreground tabular-nums">{ing.amount}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium hover:opacity-90 transition">
              Add to grocery list
            </button>
          </div>
        </aside>

        {/* Method */}
        <section className="lg:col-span-8">
          <div className="prose-styled max-w-none">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Story</p>
            <p className="mt-3 font-display text-2xl md:text-3xl leading-snug text-balance">
              {recipe.story}
            </p>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Method</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl tracking-tight">Step by step.</h2>
            <ol className="mt-8 space-y-5">
              {recipe.steps.map((step, i) => {
                const isDone = done.has(i);
                return (
                  <li key={i}>
                    <button
                      onClick={() => toggle(i)}
                      className={`group w-full text-left flex gap-5 rounded-2xl border p-5 transition
                        ${isDone ? "border-accent/60 bg-accent/15" : "border-border bg-card hover:border-primary/40"}`}
                    >
                      <span
                        className={`shrink-0 grid place-items-center h-10 w-10 rounded-full font-display text-lg transition
                          ${isDone ? "bg-forest text-background" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"}`}
                      >
                        {i + 1}
                      </span>
                      <p className={`text-base leading-relaxed ${isDone ? "line-through text-muted-foreground" : ""}`}>
                        {step}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-12 rounded-3xl bg-secondary/60 p-6 md:p-8 border border-border">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Nutrition · per serving</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: "Calories", v: `${recipe.calories}` },
                { k: "Protein", v: "18g" },
                { k: "Carbs", v: "62g" },
                { k: "Fat", v: "14g" },
              ].map((n) => (
                <div key={n.k} className="rounded-2xl bg-background p-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{n.k}</p>
                  <p className="mt-1 font-display text-2xl">{n.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* RELATED */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-20">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight">You'll love these too.</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((r, i) => (
            <RecipeCard key={r.slug} recipe={r} index={i} />
          ))}
        </div>
      </section>
    </article>
  );
}

function Stat({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-background/15 backdrop-blur px-3.5 py-1.5 text-sm">
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
}

function ActionButton({
  icon: Icon,
  label,
  onClick,
  active,
}: {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition
        ${active ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground/40"}`}
    >
      <Icon className={`h-4 w-4 ${active ? "fill-current" : ""}`} />
      {label}
    </button>
  );
}
