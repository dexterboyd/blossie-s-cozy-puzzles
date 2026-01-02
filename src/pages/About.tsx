import Layout from "@/components/layout/Layout";
import { Heart, Puzzle, Coffee, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Story Behind
                <span className="text-primary block">Blossie's Puzzles</span>
              </h1>
            </div>

            {/* Story Content */}
            <div className="bg-card rounded-2xl shadow-warm p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Hello there, puzzle friend! I'm Blossie, and I'm so glad you found your way to my little corner of the internet.
                </p>

                <p className="text-foreground leading-relaxed mb-6">
                  My love for jigsaw puzzles started on a chilly autumn evening many years ago. With a warm cup of tea in hand
                  and the smell of cinnamon in the air, I opened my first "grown-up" puzzle—a beautiful 1000-piece landscape
                  of fall foliage. From that moment, I was hooked.
                </p>

                <p className="text-foreground leading-relaxed mb-6">
                  There's something magical about the way puzzle pieces click together, how a scattered mess of cardboard
                  slowly transforms into a breathtaking image. It's meditative, satisfying, and the perfect way to unwind
                  after a long day.
                </p>

                <p className="text-foreground leading-relaxed mb-6">
                  Over the years, my collection grew—and grew, and grew! My family started joking that I needed a "puzzle intervention."
                  Instead, I decided to share my passion with fellow puzzle enthusiasts like you.
                </p>

                <p className="text-foreground leading-relaxed mb-8">
                  Every puzzle in my shop has been personally selected (and often completed!) by me. I look for beautiful imagery,
                  quality materials, and that satisfying "click" when pieces fit together just right. Whether you're a seasoned
                  puzzler or just starting out, I hope you'll find something here that brings you as much joy as puzzling brings me.
                </p>

                <p className="text-lg text-primary font-heading font-semibold">
                  Happy puzzling! 🧩
                </p>
                <p className="text-muted-foreground italic">
                  — Blossie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-warm text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Hand-Selected</h3>
              <p className="text-sm text-muted-foreground">
                Every puzzle is personally chosen for quality and beauty.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-warm text-center">
              <div className="w-14 h-14 bg-secondary/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Puzzle className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Thick, sturdy pieces that feel great in your hands.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-warm text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Cozy Vibes</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for relaxing evenings and mindful moments.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-warm text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Family Fun</h3>
              <p className="text-sm text-muted-foreground">
                Puzzles for all ages and skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
