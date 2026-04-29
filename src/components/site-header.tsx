import { Link } from "@tanstack/react-router";
import { Search, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/recipes", label: "Recipes" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-semibold">
            s
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            sage<span className="text-primary">&amp;</span>salt
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/recipes"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Search recipes…</span>
          </Link>
          <Link
            to="/favorites"
            aria-label="Favorites"
            className="grid place-items-center h-10 w-10 rounded-full border border-border bg-card hover:bg-muted transition-colors"
          >
            <Heart className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-border bg-card"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-1.5 text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
