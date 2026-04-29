import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-semibold">
              s
            </span>
            <span className="font-display text-xl font-semibold">
              sage<span className="text-primary">&amp;</span>salt
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A slow kitchen journal — recipes for cooks who care about the table, the season,
            and the people gathered around.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/recipes" className="hover:text-foreground">All recipes</Link></li>
            <li><Link to="/collections" className="hover:text-foreground">Collections</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">A new recipe every Sunday.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@table.com"
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-full bg-primary text-primary-foreground px-4 text-sm font-medium hover:opacity-90 transition">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} sage &amp; salt — handmade with butter and time.
      </div>
    </footer>
  );
}
