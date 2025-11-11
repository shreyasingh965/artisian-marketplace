import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import textileImage from "@/assets/textile-art.jpg";
import potteryImage from "@/assets/pottery-art.jpg";
import jewelryImage from "@/assets/jewelry-art.jpg";

const products = [
  {
    id: 1,
    name: "Handwoven Silk Saree",
    artisan: "Lakshmi Textiles",
    price: "₹8,500",
    image: textileImage,
    location: "Varanasi, UP",
  },
  {
    id: 2,
    name: "Terracotta Vase Set",
    artisan: "Kumar Pottery",
    price: "₹2,200",
    image: potteryImage,
    location: "Jaipur, Rajasthan",
  },
  {
    id: 3,
    name: "Traditional Kundan Necklace",
    artisan: "Royal Jewelers",
    price: "₹15,000",
    image: jewelryImage,
    location: "Jaipur, Rajasthan",
  },
  {
    id: 4,
    name: "Block Print Cotton Dupatta",
    artisan: "Lakshmi Textiles",
    price: "₹1,800",
    image: textileImage,
    location: "Sanganer, Rajasthan",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Creations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked treasures from our talented artisan community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-soft"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.artisan}</p>
                <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{product.location}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="shadow-soft">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
