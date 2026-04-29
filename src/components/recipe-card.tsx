import { Link } from "@tanstack/react-router";
import { Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { Recipe } from "@/lib/recipes";

export function RecipeCard({ recipe, index = 0 }: { recipe: Recipe; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to="/recipes/$slug"
        params={{ slug: recipe.slug }}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/5]">
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent" />
          <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[11px] font-medium tracking-wide uppercase">
            {recipe.category}
          </span>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-xs text-background/90">
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{recipe.time}m</span>
            <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{recipe.servings}</span>
            <span className="ml-auto rounded-full bg-background/15 backdrop-blur px-2.5 py-0.5">{recipe.cuisine}</span>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="font-display text-xl leading-tight tracking-tight text-balance group-hover:text-primary transition-colors">
            {recipe.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{recipe.tagline}</p>
        </div>
      </Link>
    </motion.div>
  );
}
