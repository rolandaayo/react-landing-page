/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

/**
 * Hero Component
 * A responsive grid layout displaying collection of shoes
 * Responsive breakpoints:
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 */
export default function Hero() {
  const dispatch = useDispatch();

  const imagesAndText = [
    {
      id: 1,
      image: "./images/collection-1.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 129.99,
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 2,
      image: "./images/collection-2.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 149.99,
      rating: 4.8,
      reviews: 256,
    },
    {
      id: 3,
      image: "./images/collection-3.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 139.99,
      rating: 4.6,
      reviews: 189,
    },
    {
      id: 4,
      image: "./images/collection-3.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 159.99,
      rating: 4.7,
      reviews: 167,
    },
    {
      id: 5,
      image: "./images/collection-2.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 169.99,
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 6,
      image: "./images/collection-1.jpg",
      text: "Men/Women",
      subtext: "Running Sneaker Shoes",
      price: 144.99,
      rating: 4.4,
      reviews: 145,
    },
  ];

  const handleAddToCart = (item) => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        title: item.subtext,
        price: item.price,
        image: item.image,
      })
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center px-4 py-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
        {imagesAndText.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md"
          >
            <motion.img
              src={item.image}
              alt={`Collection item ${index + 1}`}
              className="w-full max-w-[400px] rounded-lg shadow-xl"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.p
              className="text-center font-bold text-lg sm:text-xl mt-2 text-gray-800"
              whileHover={{ color: "#2563EB" }}
            >
              {item.text}
            </motion.p>
            <motion.p
              className="text-center font-bold text-xl sm:text-2xl text-gray-900"
              whileHover={{ color: "#2563EB" }}
            >
              {item.subtext}
            </motion.p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className={`text-xl ${
                    i < Math.floor(item.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                >
                  ★
                </motion.span>
              ))}
              <span className="ml-2 text-gray-600">({item.reviews})</span>
            </div>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              ${item.price}
            </p>
            <motion.button
              onClick={() => handleAddToCart(item)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center"
              whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
