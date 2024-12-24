/* eslint-disable no-unused-vars */
import React from "react";

/**
 * Hero Component
 * A responsive grid layout displaying collection of shoes
 * Responsive breakpoints:
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 */
export default function Hero() {
  const imagesAndText = [
    {
      image: "./images/collection-1.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 129.99,
      rating: 4.5,
      reviews: 128,
    },
    {
      image: "./images/collection-2.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 149.99,
      rating: 4.8,
      reviews: 256,
    },
    {
      image: "./images/collection-3.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 139.99,
      rating: 4.6,
      reviews: 189,
    },
    {
      image: "./images/collection-3.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 159.99,
      rating: 4.7,
      reviews: 167,
    },
    {
      image: "./images/collection-2.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 169.99,
      rating: 4.9,
      reviews: 234,
    },
    {
      image: "./images/collection-1.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 144.99,
      rating: 4.4,
      reviews: 145,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="flex justify-center items-center px-4 py-5 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
        {imagesAndText.map((item, index) => (
          <div
            className="flex flex-col items-center transform hover:scale-105 transition-all duration-300 ease-in-out bg-white rounded-lg p-4 shadow-md"
            key={index}
          >
            <img
              src={item.image}
              alt={`Collection item ${index + 1}`}
              className="w-full max-w-[400px] rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            />
            <p className="text-center font-bold text-lg sm:text-xl mt-2 hover:text-blue-600 transition-colors duration-300">
              {item.text}
            </p>
            <p className="text-center font-bold text-xl sm:text-2xl hover:text-blue-600 transition-colors duration-300">
              {item.subtext}
            </p>
            <div className="flex items-center mt-2">
              {renderStars(item.rating)}
              <span className="ml-2 text-gray-600">({item.reviews})</span>
            </div>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              ${item.price}
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
