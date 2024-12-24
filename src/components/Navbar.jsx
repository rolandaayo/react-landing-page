// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import CartList from "./CartList";

/**
 * Navbar Component
 * A responsive navigation bar that includes a logo, navigation links, and a mobile menu
 * Handles both desktop and mobile views with a hamburger menu for smaller screens
 * @returns {JSX.Element} Rendered Navbar compoånent
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotal = useSelector((state) => state.cart.totalAmount);

  const CartIcon = () => (
    <motion.li whileHover={{ scale: 1.1 }} className="relative">
      <button
        onClick={() => setIsCartOpen(true)}
        className="flex items-center focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {cartQuantity > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
          >
            {cartQuantity}
          </motion.span>
        )}
      </button>
    </motion.li>
  );

  return (
    <>
      <div className="flex justify-center items-center px-4 fixed top-0 left-0 right-0 z-50">
        <motion.div
          className="bg-black text-white h-auto p-5 w-full max-w-[1200px] rounded-lg mt-3"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <nav className="flex items-center justify-between flex-wrap">
            <motion.div whileHover={{ scale: 1.1, rotate: 3 }} className="logo">
              LOGO
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex items-center space-x-5">
                {["Home", "About", "Projects", "Contacts"].map((item) => (
                  <motion.li key={item} whileHover={{ y: -3, scale: 1.05 }}>
                    <a href="#" className="hover:text-gray-300">
                      {item}
                    </a>
                  </motion.li>
                ))}
                <CartIcon />
              </ul>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center space-x-4">
              <CartIcon />
              <motion.div
                className="cursor-pointer"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="space-y-2">
                  <motion.span
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      translateY: isMenuOpen ? 8 : 0,
                    }}
                    className="block w-8 h-0.5 bg-white"
                  />
                  <motion.span
                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                    className="block w-8 h-0.5 bg-white"
                  />
                  <motion.span
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      translateY: isMenuOpen ? -8 : 0,
                    }}
                    className="block w-8 h-0.5 bg-white"
                  />
                </div>
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="w-full md:hidden mt-4"
                >
                  <ul className="flex flex-col space-y-4">
                    {["Home", "About", "Projects", "Contacts"].map(
                      (item, index) => (
                        <motion.li
                          key={item}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <a href="#" className="hover:text-gray-300">
                            {item}
                          </a>
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.div>
      </div>

      {/* Cart List Component */}
      <CartList isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
