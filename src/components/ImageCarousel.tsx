
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  productName: string;
}

const ImageCarousel = ({ images, productName }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 sm:h-80 bg-gray-100 rounded-lg overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`${productName} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-300"
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white transition-all duration-200 shadow-lg"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} className="text-gray-700" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white transition-all duration-200 shadow-lg"
        aria-label="Next image"
      >
        <ChevronRight size={20} className="text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white text-xs rounded-full">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
