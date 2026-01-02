import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface PuzzleCardProps {
  id: number;
  name: string;
  pieces: number;
  description: string;
  price: number;
  image: string;
}

const PuzzleCard = ({ name, pieces, description, price, image }: PuzzleCardProps) => {
  const handleAddToCart = () => {
    toast.success(`${name} added to cart!`, {
      description: "Continue shopping or checkout when ready.",
    });
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {pieces} pieces
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-heading text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <Button variant="warm" size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PuzzleCard;
