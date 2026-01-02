import Layout from "@/components/layout/Layout";
import PuzzleCard from "@/components/PuzzleCard";
import { puzzles } from "@/data/puzzles";
import { Filter, Grid, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [sortBy, setSortBy] = useState<"name" | "price" | "pieces">("name");

  const sortedPuzzles = [...puzzles].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "pieces") return a.pieces - b.pieces;
    return 0;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Puzzle Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our carefully curated selection of jigsaw puzzles.
            From cozy cottages to stunning landscapes—find your next puzzle adventure!
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 bg-card rounded-xl shadow-warm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <LayoutGrid className="w-5 h-5" />
              <span className="font-medium">{puzzles.length} puzzles available</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <div className="flex gap-2">
                <Button
                  variant={sortBy === "name" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("name")}
                >
                  Name
                </Button>
                <Button
                  variant={sortBy === "price" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("price")}
                >
                  Price
                </Button>
                <Button
                  variant={sortBy === "pieces" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("pieces")}
                >
                  Pieces
                </Button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedPuzzles.map((puzzle, index) => (
              <div
                key={puzzle.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PuzzleCard {...puzzle} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
