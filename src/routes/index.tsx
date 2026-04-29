import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles, Users, Utensils } from "lucide-react";
import { recipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/recipe-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "sage & salt — A slow recipe journal" },
      { name: "description", content: "Editorial recipes, ingredient-led search, and meal planning for home cooks." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const hero = recipes[0];
  const featured = recipes.slice(1, 4);
  const more = recipes.slice(4);

  return (
    <div>
      {/* HERO — magazine split */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-10 lg:pt-16 pb-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5 lg:pb-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" /> Issue №01 · Late Summer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance"
            >
              Slow food for{" "}
              <span className="italic text-primary">fast lives.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-lg text-muted-foreground max-w-md text-pretty"
            >
              An editorial kitchen journal — search by what's in your fridge, follow steps
              that actually fit a Tuesday, and save the dishes worth making twice.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/recipes"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-warm hover:shadow-soft transition"
              >
                Browse all recipes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition"
              >
                Curated collections
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "240+", v: "Recipes" },
                { k: "12", v: "Cuisines" },
                { k: "98%", v: "5★ rated" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-3xl">{s.k}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-warm">
              <img
                src={hero.image}
                alt={hero.title}
                width={1536}
                height={1536}
                className="w-full h-[460px] md:h-[560px] lg:h-[640px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-background">
                <p className="text-[11px] uppercase tracking-[0.3em] opacity-80">Featured recipe</p>
                <h2 className="mt-2 font-display text-2xl md:text-3xl max-w-xl text-balance">
                  {hero.title}
                </h2>
                <div className="mt-4 flex items-center gap-5 text-sm">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{hero.time} min</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" />Serves {hero.servings}</span>
                  <span className="inline-flex items-center gap-1.5"><Utensils className="h-4 w-4" />{hero.difficulty}</span>
                  <Link
                    to="/recipes/$slug"
                    params={{ slug: hero.slug }}
                    className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-background text-foreground px-4 py-2 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition"
                  >
                    Cook this <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 rounded-2xl bg-card border border-border shadow-soft p-4 max-w-[220px]">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Cooked tonight</p>
              <p className="mt-1 font-display text-lg leading-tight">14,302 home cooks</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-6 flex items-center gap-3 overflow-x-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground shrink-0 mr-2">
            Browse —
          </span>
          {["Breakfast", "Quick Weeknights", "Vegetarian", "Mains", "Desserts", "Mediterranean", "Gluten-free"].map(
            (c) => (
              <Link
                key={c}
                to="/recipes"
                className="shrink-0 rounded-full border border-border bg-background px-4 py-1.5 text-sm hover:border-primary hover:text-primary transition"
              >
                {c}
              </Link>
            )
          )}
        </div>
      </section>

      {/* FEATURED — magazine grid */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">This week's edit</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
              Three to make this week.
            </h2>
          </div>
          <Link
            to="/recipes"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition"
          >
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((r, i) => (
            <RecipeCard key={r.slug} recipe={r} index={i} />
          ))}
        </div>
      </section>

      {/* INGREDIENT SEARCH BANNER */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="rounded-[2rem] bg-foreground text-background overflow-hidden relative p-8 md:p-14">
          <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Smart kitchen</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance leading-tight">
                Tell us what's in your fridge — we'll plate dinner.
              </h2>
              <p className="mt-4 text-background/70 max-w-md">
                Type a few ingredients. We surface recipes you can make right now,
                with cook-time filters and grocery lists for what's missing.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl bg-background text-foreground p-3 flex flex-col sm:flex-row gap-2 shadow-warm"
            >
              <input
                type="text"
                placeholder="e.g. tomatoes, garlic, basil…"
                className="flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-xl bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
                Find recipes
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MORE GRID */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">More to cook.</h2>
          <Link to="/recipes" className="text-sm font-medium hover:text-primary inline-flex items-center gap-1.5">
            All recipes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {more.map((r, i) => (
            <RecipeCard key={r.slug} recipe={r} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
