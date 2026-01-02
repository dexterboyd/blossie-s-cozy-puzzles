import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PuzzleCard from "@/components/PuzzleCard";
import { Button } from "@/components/ui/button";
import { getFeaturedPuzzles } from "@/data/puzzles";
import { ArrowRight, Sparkles, Heart, Puzzle } from "lucide-react";

const Index = () => {
  const featuredPuzzles = getFeaturedPuzzles();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/30 text-secondary-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Handpicked with Love</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Piece Together Your
              <span className="text-primary block mt-2">Perfect Moment</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Welcome to Blossie's Puzzles! Discover our cozy collection of jigsaw puzzles,
              perfect for quiet evenings, family gatherings, or a mindful escape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="group">
                <Link to="/shop">
                  Browse Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </section>

      {/* Features */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-warm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Puzzle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Quality Pieces</h3>
                <p className="text-sm text-muted-foreground">Thick, sturdy puzzle pieces</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-warm">
              <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Hand Selected</h3>
                <p className="text-sm text-muted-foreground">Each puzzle chosen with care</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-warm">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Cozy Vibes</h3>
                <p className="text-sm text-muted-foreground">Perfect for relaxing evenings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Puzzles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Favorites
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our most loved puzzles, perfect for cozy fall evenings and mindful moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPuzzles.map((puzzle, index) => (
              <div
                key={puzzle.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PuzzleCard {...puzzle} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">
                View All Puzzles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Puzzling?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join our cozy community of puzzle enthusiasts and find your next favorite puzzle today!
          </p>
          <Button asChild size="lg" variant="warm">
            <Link to="/shop">
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
