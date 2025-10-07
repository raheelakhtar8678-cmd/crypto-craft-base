import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  category: string;
  image: string;
  vendor: string;
}

const ProductCard = ({ title, price, category, image, vendor }: ProductCardProps) => {
  return (
    <Card className="glass-card overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:glow-primary">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
          {category}
        </Badge>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">by {vendor}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold gradient-text">{price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Buy
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
