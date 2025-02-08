
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getCar } from "../getCars";
import PickupDropoff from "@/app/components/selectors";
import Link from "next/link";

export default function CheckoutPage() {
  const params = useParams();
  const id = params?.id as string;
  const [car, setCar] = useState<any>(null);
  const [rentalDays, setRentalDays] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCar() {
      if (!id) return;
      setLoading(true);
      const fetchedCar = await getCar(id);
      setCar(fetchedCar);
      setLoading(false);
    }
    fetchCar();
  }, [id]);

  const handleRentalDaysChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const days = parseInt(event.target.value, 10);
    setRentalDays(Math.min(Math.max(days, 1), 7)); // Ensure between 1 and 7
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold animate-pulse">Loading...</h1>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">Car Not Found</h1>
      </div>
    );
  }
  const extractPrice = (priceStr: string): number => {
    const match = priceStr.match(/[\d,.]+/); // Extract numeric part
    return match ? parseFloat(match[0]) : 0; // Convert to number
  };
  const pricePerDay = extractPrice(car?.pricePerDay) || 0;

  const subtotal = pricePerDay * rentalDays;
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-lg mt-10 mb-10">
      <h1 className="text-2xl font-bold mb-6 font-mono text-center text-blue-600">
        Booking Summary
      </h1>
      <div className="flex justify-between">
        <h1 className="text-xl font-extrabold mb-6 text-center text-blue-800">
          {car.name}
        </h1>
        <h1 className="text-xl font-extrabold mb-6 text-center text-blue-800">
          {car.pricePerDay}
        </h1>
      </div>

      {/* Car Info */}
      <div className="flex flex-col md:flex-row items-center gap-6 ">
        <Image
          src={car.image}
          alt={car.name}
          width={400}
          height={400}
          className="rounded-lg shadow-md"
        />
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full space-y-2">
              <p className="text-gray-600">
                <strong>Brand:</strong> {car.brand}
              </p>
              <p className="text-gray-600">
                <strong>Type:</strong> {car.type}
              </p>
              <p className="text-gray-600">
                <strong>Seats:</strong> {car.seatingCapacity}
              </p>
            </div>

            <div className="w-full space-y-2">
              <p className="text-gray-600">
                <strong>Transmission:</strong> {car.transmission}
              </p>
              <p className="text-gray-600">
                <strong>Fuel Capacity:</strong> {car.fuelCapacity}L
              </p>
            </div>

            <div className="w-full space-y-2"></div>

            <div className="w-full space-y-2">
              {/* Additional content if needed */}
            </div>
          </div>
        </div>
        
      </div>
      {/* Rental Days Input */}
      <div className="mt-6">
      
        <label className="text-lg font-semibold text-gray-700">
          Rental Days:
        </label>
        <input
          type="number"
          min="1"
          max="7"
          value={rentalDays}
          onChange={handleRentalDaysChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 w-20 text-center"
        />
        <p className="text-gray-500 text-sm mt-1">Select between 1 to 7 days</p>
      </div>
      <div>
      <div className="mt-6 border-t pt-4 space-y-2">
        <p className="text-lg text-gray-700">
           <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
         </p>
         <p className="text-lg text-gray-700">
           <strong>GST (5%):</strong> ${gst.toFixed(2)}
         </p>
         <h3 className="text-2xl font-bold text-gray-800 border-t pt-2">
           Total: ${total.toFixed(2)}
        </h3>
      </div>
      <div>
              {/* Checkout Button */}
      
      </div>
      </div>
      <div className="max-w-full lg:max-w-1/3">
        <PickupDropoff></PickupDropoff>
      </div>
      <div className="mt-6 text-center">
        <Link href={`/payment/${id}`}className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
          Proceed to Pay
        </Link>
      </div>
    </div>
  );
}
