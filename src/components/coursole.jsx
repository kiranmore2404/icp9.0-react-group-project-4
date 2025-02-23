import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    img: "/src/components/coursole/Refund.webp",
  },
  {
    img: "/src/components/coursole/free-Cancilation.webp",
  },
  {
    img: "/src/components/coursole/IRCTC-partner.webp",
  },
  {
    img: "/src/components/coursole/customer-support.jpg",
  },
  {
    img: "/src/components/coursole/Lowest-fair.webp",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide feature using useEffect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-3">
      <h2 className="text-xl font-bold mb-3 text-gray-800">Why Book With Track and Go?</h2>
      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 rounded-xl shadow-lg mx-1"
            >
              <img src={item.img} alt="icon" className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-3 space-x-3">
        <button onClick={prevSlide} className="p-1.5 bg-gray-300 rounded-full hover:bg-gray-400 transition">
          <ChevronLeft size={16} />
        </button>
        <button onClick={nextSlide} className="p-1.5 bg-gray-300 rounded-full hover:bg-gray-400 transition">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex mt-2 space-x-1">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"} transition`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
