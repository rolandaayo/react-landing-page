import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

export default function CartList({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-hidden flex flex-col"
          >
            <div className="p-4 bg-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  Your cart is empty
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                        <p className="font-bold text-blue-600">
                          ${item.total.toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="p-2 hover:bg-red-100 rounded-full text-red-500 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-100 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total Amount:</span>
                <span className="font-bold text-xl text-blue-600">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
              <button
                disabled={cartItems.length === 0}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                         disabled:bg-gray-400 disabled:cursor-not-allowed
                         hover:bg-blue-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
