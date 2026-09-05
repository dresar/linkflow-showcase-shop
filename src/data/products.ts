
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  category: string;
  links: {
    buy: string;
    demo?: string;
    website?: string;
    docs?: string;
  };
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Mobile App",
    description: "Aplikasi mobile modern dengan fitur lengkap dan design yang stunning",
    price: "Rp 2.500.000",
    category: "Mobile Development",
    images: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop"
    ],
    links: {
      buy: "https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20Premium%20Mobile%20App",
      demo: "https://demo.example.com",
      website: "https://example.com",
      docs: "https://docs.example.com"
    },
    features: [
      "UI/UX Design Modern",
      "Cross Platform (iOS & Android)",
      "Push Notifications",
      "Offline Support",
      "Admin Dashboard"
    ]
  },
  {
    id: "2",
    name: "E-Commerce Website",
    description: "Website toko online profesional dengan fitur payment gateway terintegrasi",
    price: "Rp 3.500.000",
    category: "Web Development",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop"
    ],
    links: {
      buy: "https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20E-Commerce%20Website",
      demo: "https://ecommerce-demo.example.com",
      website: "https://ecommerce.example.com"
    },
    features: [
      "Responsive Design",
      "Payment Gateway",
      "Inventory Management",
      "SEO Optimized",
      "Analytics Dashboard"
    ]
  },
  {
    id: "3",
    name: "Digital Marketing Course",
    description: "Kursus online lengkap tentang digital marketing untuk pemula hingga advanced",
    price: "Rp 499.000",
    category: "Digital Course",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    ],
    links: {
      buy: "https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20Digital%20Marketing%20Course",
      demo: "https://course-preview.example.com",
      website: "https://course.example.com"
    },
    features: [
      "50+ Video Lessons",
      "Live Q&A Sessions",
      "Certificate",
      "Lifetime Access",
      "Community Access"
    ]
  }
];
