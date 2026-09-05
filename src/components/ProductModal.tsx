
import { Product } from "@/data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, FileText, ShoppingCart } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import SocialLinks from "./SocialLinks";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  if (!product) return null;

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="p-6">
          <DialogHeader className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-left">
                  {product.name}
                </DialogTitle>
                <Badge variant="secondary" className="w-fit mt-2">
                  {product.category}
                </Badge>
              </div>
              <div className="text-right">
                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                  {product.price}
                </p>
              </div>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Carousel */}
            <div className="order-1">
              <ImageCarousel images={product.images} productName={product.name} />
            </div>

            {/* Product Info */}
            <div className="order-2 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Deskripsi</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Fitur Utama</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button 
                  onClick={() => handleLinkClick(product.links.buy)}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  size="lg"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Beli Sekarang
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {product.links.demo && (
                    <Button
                      variant="outline"
                      onClick={() => handleLinkClick(product.links.demo)}
                      className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                    >
                      <Play className="mr-2" size={16} />
                      Demo
                    </Button>
                  )}
                  
                  {product.links.website && (
                    <Button
                      variant="outline"
                      onClick={() => handleLinkClick(product.links.website)}
                      className="hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Website
                    </Button>
                  )}
                  
                  {product.links.docs && (
                    <Button
                      variant="outline"
                      onClick={() => handleLinkClick(product.links.docs)}
                      className="hover:bg-orange-50 hover:border-orange-300 transition-all duration-200"
                    >
                      <FileText className="mr-2" size={16} />
                      Docs
                    </Button>
                  )}
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t">
                <h4 className="font-medium text-center mb-2 text-gray-700">
                  Hubungi Kami
                </h4>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
