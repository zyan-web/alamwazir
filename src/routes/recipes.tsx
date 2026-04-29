import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { recipes, cuisines, categories, diets } from "@/lib/recipes";
import { RecipeCard } from "@/components/recipe-card";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [
      { title: "All Recipes — sage & salt" },
      { name: "description", content: "Search and filter our full library of seasonal recipes by ingredient, cuisine, diet and cook time." },
    ],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  const [q, setQ] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [category, setCategory] = useState("All");
  const [diet, setDiet] = useState("All");
  const [maxTime, setMaxTime] = useState(120);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return recipes.filter((r) => {
      if (cuisine !== "All" && r.cuisine !== cuisine) return false;
      if (category !== "All" && r.category !== category) return false;
      if (diet !== "All" && !r.diet.some((d) => d.toLowerCase().includes(diet.toLowerCase()))) return false;
      if (r.time > maxTime) return false;
      if (!needle) return true;
      return (
        r.title.toLowerCase().includes(needle) ||
        r.tagline.toLowerCase().includes(needle) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(needle))
      );
    });
  }, [q, cuisine, category, diet, maxTime]);

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10 py-14">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">The library</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight">All recipes.</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Search by ingredient, filter by cuisine, diet or cook time. Built for evenings when
          you'd rather decide quickly and cook slowly.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-card p-5 md:p-6 shadow-soft">
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            type="text"
            placeholder="Search recipes or ingredients…"
            className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground"
          />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-4">
          <FilterSelect label="Cuisine" value={cuisine} onChange={setCuisine} options={cuisines} />
          <FilterSelect label="Category" value={category} onChange={setCategory} options={categories} />
          <FilterSelect label="Diet" value={diet} onChange={setDiet} options={diets} />
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
              Max cook time · {maxTime}m
            </label>
            <input
              type="range"
              min={15}
              max={120}
              step={5}
              value={maxTime}
              onChange={(e) => setMaxTime(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "recipe" : "recipes"}
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((r, i) => (
          <RecipeCard key={r.slug} recipe={r} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center">
          <p className="font-display text-2xl">Nothing on the menu.</p>
          <p className="mt-2 text-muted-foreground">Try widening your filters.</p>
        </div>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
