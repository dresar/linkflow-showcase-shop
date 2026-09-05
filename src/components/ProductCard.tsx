
import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const handleBuyNow = () => {
    window.open(product.links.buy, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-white/90 text-gray-800"
        >
          {product.category}
        </Badge>
        <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {product.price}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex gap-2">
          <Button
            onClick={() => onViewDetails(product)}
            variant="outline"
            size="sm"
            className="flex-1 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
          >
            <Eye className="mr-2" size={16} />
            Detail
          </Button>
          <Button
            onClick={handleBuyNow}
            size="sm"
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-200"
          >
            <ShoppingCart className="mr-2" size={16} />
            Beli
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
