export interface Puzzle {
  id: number;
  name: string;
  pieces: number;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
}

export const puzzles: Puzzle[] = [
  {
    id: 1,
    name: "Autumn Harvest",
    pieces: 1000,
    description: "A stunning fall scene featuring pumpkins, golden leaves, and a cozy farmhouse backdrop.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=500&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Cozy Cottage",
    pieces: 500,
    description: "A charming cottage nestled in autumn woods with warm lighting glowing from the windows.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=500&h=500&fit=crop",
    featured: true,
  },
  {
    id: 3,
    name: "Forest Trail",
    pieces: 750,
    description: "A winding path through a vibrant fall forest with red and orange canopy overhead.",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=500&h=500&fit=crop",
    featured: true,
  },
  {
    id: 4,
    name: "Pumpkin Patch",
    pieces: 300,
    description: "Perfect for beginners! A cheerful pumpkin patch scene with friendly scarecrows.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1509622905150-fa66d3906e09?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    name: "Maple Reflections",
    pieces: 1500,
    description: "A challenging puzzle featuring a serene lake reflecting stunning fall foliage.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
  {
    id: 6,
    name: "Harvest Table",
    pieces: 500,
    description: "A beautifully arranged harvest table with seasonal fruits, vegetables, and flowers.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
  },
  {
    id: 7,
    name: "Woodland Creatures",
    pieces: 750,
    description: "Adorable forest animals preparing for fall among the changing leaves.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=500&h=500&fit=crop",
  },
  {
    id: 8,
    name: "Rustic Barn",
    pieces: 1000,
    description: "A weathered red barn surrounded by golden fields and autumn trees.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=500&fit=crop",
  },
  {
    id: 9,
    name: "Apple Orchard",
    pieces: 500,
    description: "Rows of apple trees heavy with fruit, ready for picking on a crisp fall day.",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&h=500&fit=crop",
  },
  {
    id: 10,
    name: "Golden Sunset",
    pieces: 2000,
    description: "Our most challenging puzzle! A breathtaking sunset over autumn mountains.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=500&fit=crop",
  },
];

export const getFeaturedPuzzles = () => puzzles.filter((puzzle) => puzzle.featured);
