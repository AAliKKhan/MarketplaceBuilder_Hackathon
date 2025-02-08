
"use client";

import React, { useEffect, useState } from "react";
import { Car } from "../../../types/cars";
import { client } from "@/sanity/lib/client";
import {
  allCars,
  bestPriceCars,
  luxuryCars,
  popularCars,
} from "@/sanity/lib/queries";
import CarCard from "./Card";
import Heading from "./heading";
import { urlFor } from "@/sanity/lib/image";

const CarSections = () => {
  const [error, setError] = useState<string | null>(null);

  const [Pcars, setPcars] = useState<Car[]>([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars: Car[] = await client.fetch(popularCars);
        setPcars(fetchedCars);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to load car data. Please try again later.");
      }
    };
    fetchCars();
  }, []);

  const [BPcars, setBPcars] = useState<Car[]>([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars: Car[] = await client.fetch(bestPriceCars);
        setBPcars(fetchedCars);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to load car data. Please try again later.");
      }
    };
    fetchCars();
  }, []);

  const [Lcars, setLcars] = useState<Car[]>([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars: Car[] = await client.fetch(luxuryCars);
        setLcars(fetchedCars);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to load car data. Please try again later.");
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Heading text="Popular Cars" />
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {Pcars.map((car, index) => (
          <div
            key={car.id || `popular-car-${index}`} // Fallback key
            className="min-w-[250px] sm:min-w-[300px] lg:min-w-[400px] flex-shrink-0"
          >
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
      <Heading text="Best Pricing" />
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {BPcars.map((car, index) => (
          <div
            key={car.id || `best-price-car-${index}`} // Fallback key
            className="min-w-[250px] sm:min-w-[300px] lg:min-w-[400px] flex-shrink-0"
          >
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
      <Heading text="Luxurious Cars" />
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {Lcars.map((car, index) => (
          <div
            key={car.id || `luxury-car-${index}`} // Fallback key
            className="min-w-[250px] sm:min-w-[300px] lg:min-w-[400px] flex-shrink-0"
          >
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

export default CarSections;
