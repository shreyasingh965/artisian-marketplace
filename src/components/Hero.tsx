import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Indian Artisan Crafts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Discover Authentic
          <span className="block text-accent">Indian Craftsmanship</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md opacity-95">
          Connect directly with skilled artisans and bring home the rich heritage of India's handcrafted treasures
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-medium">
            <input
              type="text"
              placeholder="Search for crafts, artisans, or categories..."
              className="flex-1 px-6 py-3 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            />
            <Button size="lg" className="rounded-full px-8 shadow-glow">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="shadow-medium">
            Explore Collection
          </Button>
          <Button size="lg" variant="outline" className="bg-white/90 backdrop-blur-sm border-white hover:bg-white shadow-medium">
            Become an Artisan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
