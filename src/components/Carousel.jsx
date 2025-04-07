import { useState, useEffect } from "react";

const images = [
  "https://i.pinimg.com/736x/2c/d4/7d/2cd47dd51149e88575d48109e70a3e68.jpg",
  "https://i.pinimg.com/736x/9d/7d/9d/9d7d9d32cf79ae751798113a5f467109.jpg",
  "https://i.pinimg.com/736x/4b/c8/12/4bc812c663a72783ffdb9fc4a9e38683.jpg",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-[90%] mx-auto mt-8 rounded-xl overflow-hidden shadow-lg h-[450px]">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/70 hover:bg-gray-800 text-white p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/70 hover:bg-gray-800 text-white p-2 rounded-full"
      >
        →
      </button>
    </div>
  );
};

export default Carousel;
