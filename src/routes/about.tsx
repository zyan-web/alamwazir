import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — sage & salt" },
      { name: "description", content: "A small editorial kitchen journal for home cooks who care about the table." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 lg:px-10 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight">
        A slow kitchen, on the internet.
      </h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          <span className="font-display text-primary">sage &amp; salt</span> is a small editorial
          kitchen journal made for home cooks. We publish recipes with the patience of a print
          magazine and the utility of a modern app — searchable, filterable, savable.
        </p>
        <p>
          Every recipe is tested in a real home kitchen, written for a real Tuesday, and styled
          to make you actually want to cook. We care about the season, about waste, about the
          quiet pleasure of feeding people you love.
        </p>
        <p>
          Search by what's in your fridge. Save the ones worth making twice. Build a grocery
          list with one tap. We'll handle the rest.
        </p>
      </div>
      <Link
        to="/recipes"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
      >
        Start cooking
      </Link>
    </div>
  );
}
