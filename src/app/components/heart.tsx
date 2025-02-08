

"use client";
import React from "react";
import { useWishlist } from "../wishlistContext";


interface HeartButtonProps {
  car: {
    id: number;
    name: string;
    type: string;
    price: string;
    fuelCapacity: string;
    transmission: string;
    passengers: string;
    carImage: string;
  } | null; // Allow null as a fallback in case of undefined
}

const HeartButton: React.FC<HeartButtonProps> = ({ car }) => {
  const { wishlist, toggleWishlist } = useWishlist();

  // If the car is null or undefined, return a fallback
  if (!car) return <span>Loading...</span>;

  const isLiked = wishlist.some((c) => c.id === car.id);

  return (
    <button
      onClick={() => toggleWishlist(car)}
      style={{
        all: "unset",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
      }}
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      <img
        src={isLiked ? "/redheart.png" : "/whiteheart.png"}
        alt={isLiked ? "Red heart" : "White heart"}
        style={{
          width: "24px",
          height: "24px",
        }}
      />
    </button>
  );
};

export default HeartButton;
