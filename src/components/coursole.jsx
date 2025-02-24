import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import refund from "../assets/images/coursole/Refund.webp";
import freeCancellation from "../assets/images/coursole/free-Cancilation.webp";
import irctc from "../assets/images/coursole/IRCTC-partner.webp";
import support from "../assets/images/coursole/customer-support.jpg";
import lowestFair from "../assets/images/coursole/Lowest-fair.webp";

const carouselItems = [
  { img: refund },
  { img: freeCancellation },
  { img: irctc },
  { img: support },
  { img: lowestFair },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-3 my-10">
      <h2 className="text-3xl font-bold mb-5 text-green-700">Why Book With Track and Go?</h2>
      <div className="relative w-[85%] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 w-full p-3 rounded-xl shadow-lg flex-col items-center justify-center text-center mx-1"
            >
              <div className="w-full h-42 flex items-center justify-center mb-1.5">
                <img src={item.img} alt="icon" className="w-4/5 h-4/5 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-3 space-x-3">
        <button onClick={prevSlide} className="p-1.5 bg-gray-300 rounded-full hover:bg-gray-400 transition">
          <ChevronLeft size={16} />
        </button>
        <button onClick={nextSlide} className="p-1.5 bg-gray-300 rounded-full hover:bg-gray-400 transition">
          <ChevronRight size={16} />
        </button>
      </div>

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



