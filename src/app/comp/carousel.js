// src/app/comp/carousel.js

//----------------------------------------------
// Using PascelCasing for page names
//----------------------------------------------
"use client"
import MyImages from "./images";
import { useState, useEffect } from "react";
import '../styles/carousel.css'



const images = [
  "/image_1.jpg",
  "/image_2.jpg",
  "/image_3.jpg"
];

export default function Carousel( ) {

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
    <> <div className="w-full max-w-6xl mx-auto my-12 flex flex-col items-center">
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
        <button
          onClick={prev}
          style={{borderRadius: "10px", backgroundColor: "rgba(135, 203, 40, 1)",  paddingRight: "10px"}}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl px-2 py-2 z-10  bg-opacity-90 text-white hover:bg-opacity-70"
        >
          ◀
        </button>

        <img
          src={images[index]}
          alt={`Testimonial ${index + 1}`}
          className="w-full h-100 object-cover rounded-xl shadow-lg transition duration-500"
        />

        <button
          onClick={next}
          style={{borderRadius: "10px", backgroundColor: "rgba(135, 203, 40, 1)",  paddingLeft: "10px"}}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl px-2 py-2 z-10 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-70"
        >
          ▶
        </button>
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


