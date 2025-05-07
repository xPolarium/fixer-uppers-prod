// src/app/comp/carousel.js

//----------------------------------------------
// Using PascelCasing for page names
//----------------------------------------------
"use client"
import { useState, useEffect } from "react";
import '../styles/carousel.css'
// import Image from "next/image";

const images = [
  "/image_1.jpg",
  "/image_2.jpg",
  "/image_3.jpg"
];

export default function Carousel() {

  const [index, setIndex] = useState(0);
  const total = images.length;

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex((index - 1 + total) % total);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    <>
      <div className="w-full max-w-6xl mx-auto my-12 flex flex-col items-center">
        <div className="relative flex items-center justify-center w-full">
          {/* Left preview */}
          <div className="w-1/5 opacity-50 hover:opacity-70 cursor-pointer transition-transform transform hover:scale-105">
            <img
              src={images[prevIndex]}
              alt="Previous"
              onClick={prev}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          </div>

          {/* Center image */}
          <div className="w-3/5 px-4 relative">
            <img
              src={images[index]}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-100 object-cover rounded-xl shadow-lg transition duration-500"
            />
          </div>

          {/* Right preview */}
          <div className="w-1/5 opacity-50 hover:opacity-70 cursor-pointer transition-transform transform hover:scale-105">
            <img
              src={images[nextIndex]}
              alt="Next"
              onClick={next}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </div>

    </>
  );
}


