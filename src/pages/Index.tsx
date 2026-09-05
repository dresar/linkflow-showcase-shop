
import { useState } from "react";
import { products } from "@/data/products";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import SocialLinks from "@/components/SocialLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Zap } from "lucide-react";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "text-blue-500" },
    { icon: Award, label: "Projects Done", value: "300+", color: "text-green-500" },
    { icon: Star, label: "Rating", value: "4.9/5", color: "text-yellow-500" },
    { icon: Zap, label: "Years Experience", value: "5+", color: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative container mx-auto px-4 py-12 sm:py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="mb-8 animate-fade-in">
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 ring-4 ring-white shadow-lg">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" alt="Profile" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                John Developer
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                Full Stack Developer & Digital Solution Creator
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary" className="px-3 py-1">React Expert</Badge>
                <Badge variant="secondary" className="px-3 py-1">Mobile Developer</Badge>
                <Badge variant="secondary" className="px-3 py-1">UI/UX Designer</Badge>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 text-center">
                    <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Produk & Layanan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi digital terbaik untuk mengembangkan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan wujudkan ide digital Anda
          </p>
          <a
            href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20untuk%20konsultasi%20proyek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 John Developer. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
