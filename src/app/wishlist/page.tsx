

"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "../wishlistContext";
import { urlFor } from "@/sanity/lib/image";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-900">
         Wishlist 
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your wishlist is empty 
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((car, index) => (
            <div
              key={car.id ? car.id.toString() : `wishlist-item-${index}`} 
              className="relative bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-[500px] border border-gray-300"
            >
              {/* Remove Button */}
              <button
                className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                onClick={() => toggleWishlist(car)}
              >
                <Image src="/X.png" alt="Delete" width={24} height={24} />
              </button>

              {/* Car Image (Fixed Zoom & Alignment) */}
              <div className="w-full h-52 flex justify-center items-center overflow-hidden rounded-xl ">
                <Image 
                  src={urlFor(car.carImage).url()} 
                  alt={car.name} 
                  width={400} 
                  height={200} 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Car Details */}
              <div className="flex flex-col flex-grow justify-between mt-5">
                <h2 className="text-xl font-semibold text-gray-800">{car.name}</h2>
                <p className="text-gray-600"><b>Type:</b>{car.type}</p>
                <div className="flex justify-between mt-[10px]">
                <p className="text-gray-600"><b>Fuel:</b>{car.fuelCapacity}</p>
                <p className="text-gray-600"><b>Trans:</b>{car.transmission}</p>
                <p className="text-gray-600"><b>Capacity:</b>{car.passengers}</p>
                </div>
               
                <p className="text-blue-600 font-bold text-xl">{car.price}</p>

                {/* View Car Button */}
                <Link
                  href={`/cars/${car.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl mt-6 text-center transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  View Car
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
