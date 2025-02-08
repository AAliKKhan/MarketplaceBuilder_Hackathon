

"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaBitcoin,
  FaMobileAlt,
} from "react-icons/fa";
import FAQs from "@/app/components/faqs";

export default function PaymentPage() {
  const { id } = useParams();
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [details, setDetails] = useState("");
  const [showModal, setShowModal] = useState(false);

  const paymentOptions = [
    { name: "Binance", icon: <FaBitcoin /> },
    { name: "Easypaisa", icon: <FaMobileAlt /> },
    { name: "Debit/Credit Card", icon: <FaCreditCard /> },
    { name: "Cash on Delivery", icon: <FaMoneyBillWave /> },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full p-8 mt-12 bg-white shadow-2xl rounded-2xl border border-gray-200"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 text-center mb-6"
        >
          Select Payment Method
        </motion.h1>

        {/* Payment Buttons */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {paymentOptions.map((method) => (
            <motion.button
              key={method.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center p-4 rounded-xl text-lg font-semibold transition-all shadow-md ${
                paymentMethod === method.name
                  ? "bg-blue-600 text-white scale-105 shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => {
                setPaymentMethod(method.name);
                setDetails("");
              }}
            >
              <span className="text-3xl mb-2">{method.icon}</span>
              {method.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Details Section */}
        <AnimatePresence>
          {paymentMethod && (
            <motion.div
              key="details-section"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6 bg-white p-5 rounded-xl shadow-md border"
            >
              <h2 className="text-xl font-bold text-gray-800">Enter Details</h2>

              {paymentMethod === "Binance" && (
                <input
                  type="text"
                  placeholder="Enter Binance Wallet Address"
                  className="w-full p-3 mt-3 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-50 shadow-sm"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              )}

              {paymentMethod === "Easypaisa" && (
                <input
                  type="text"
                  placeholder="Enter Easypaisa Number"
                  className="w-full p-3 mt-3 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-50 shadow-sm"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              )}

              {paymentMethod === "Debit/Credit Card" && (
                <div className="grid gap-3 mt-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-50 shadow-sm"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Expiry Date (MM/YY)"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-50 shadow-sm"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 bg-gray-50 shadow-sm"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "Cash on Delivery" && (
                <p className="text-green-600 mt-3 text-lg font-medium">
                  Pay when your chauffeur arrives.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confirm Payment Button */}
        {paymentMethod && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 p-4 bg-green-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-green-700 transition-all"
            onClick={() => setShowModal(true)}
          >
            Confirm Payment
          </motion.button>
        )}
      </motion.div>

      {/* FAQs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 mb-16"
      >
        <FAQs />
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center"
            >
              <h2 className="text-xl font-bold text-gray-800">
                Payment Confirmed!
              </h2>
              <p className="text-gray-600 mt-2">
                Your car will arrive at your doorstep at scheduled time.
              </p>
              <button
                className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
