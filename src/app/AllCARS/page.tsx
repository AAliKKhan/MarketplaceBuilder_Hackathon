
"use client";
import React, { useEffect, useState } from "react";
import { Car } from "../../../types/cars";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/sanity/lib/queries";
import CarCard from "../components/Card";
import { urlFor } from "@/sanity/lib/image";

const AllCARS = () => {
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars: Car[] = await client.fetch(allCars);
        setCars(fetchedCars);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to load car data. Please try again later.");
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="contai px-4 py-8 max-w-[1400px] mx-auto">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div key={car.id || `${car.name}-${index}`} className="flex justify-center">
            <CarCard
             id={car.id}
              name={car.name}
              type={car.type}
              price={car.pricePerDay}
              fuelCapacity={car.fuelCapacity}
              transmission={car.transmission}
              passengers={car.seatingCapacity}

              carImage={urlFor(car.image).url()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCARS;
