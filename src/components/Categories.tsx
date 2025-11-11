import { Card } from "@/components/ui/card";
import textileImage from "@/assets/textile-art.jpg";
import potteryImage from "@/assets/pottery-art.jpg";
import jewelryImage from "@/assets/jewelry-art.jpg";

const categories = [
  {
    id: 1,
    name: "Textiles & Weaving",
    image: textileImage,
    count: "150+ items",
  },
  {
    id: 2,
    name: "Pottery & Ceramics",
    image: potteryImage,
    count: "200+ items",
  },
  {
    id: 3,
    name: "Jewelry & Metalwork",
    image: jewelryImage,
    count: "180+ items",
  },
];

const Categories = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Explore by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated collection of traditional Indian crafts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-glow transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90">{category.count}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
