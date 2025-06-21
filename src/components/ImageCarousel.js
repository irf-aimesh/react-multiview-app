import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const images = [
  process.env.PUBLIC_URL + "/images/image1.jpg",
  process.env.PUBLIC_URL + "/images/image2.jpg",
  process.env.PUBLIC_URL + "/images/image3.jpg",
  process.env.PUBLIC_URL + "/images/image4.jpg",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const iv = setInterval(() =>
      setCurrent(i => (i + 1) % images.length),
      3000
    );
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="carousel">
      <button className="arrow left" onClick={() =>
        setCurrent(c => (c - 1 + images.length) % images.length)
      }>&#10094;</button>
      <img src={images[current]} alt={`slide ${current + 1}`} />
      <button className="arrow right" onClick={() =>
        setCurrent(c => (c + 1) % images.length)
      }>&#10095;</button>
    </div>
  );
}
