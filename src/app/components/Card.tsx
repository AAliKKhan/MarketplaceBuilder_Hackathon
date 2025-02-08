


// import Image from "next/image";
// import React from "react";
// import HeartButton from "./heart";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";

// interface CarCardProps {
//   id: number;
//   name: string;
//   type: string;
//   price: string;
//   fuelCapacity: string;
//   transmission: string;
//   passengers: string;
//   carImage: string;
// }

// const CarCard: React.FC<CarCardProps> = ({
//   id,
//   name,
//   type,
//   price,
//   fuelCapacity,
//   transmission,
//   passengers,
//   carImage,
// }) => {
//   const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ""));

//   return (
//     <div className="relative w-full max-w-xs sm:max-w-sm bg-white border rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg group flex flex-col justify-between">
//       {/* Heart Icon - Always Visible */}
//       <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
//         <HeartButton
//           car={{
//             id,
//             name,
//             type,
//             price,
//             fuelCapacity,
//             transmission,
//             passengers,
//             carImage,
//           }}
//         />
//       </div>

//       {/* Car Name & Type */}
//       <div className="p-4">
//         <Link href={`/cars/${id}`}>
//           <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300 truncate">
//             {name}
//           </h3>
//         </Link>
//         <p className="text-xs sm:text-sm text-gray-500 mt-1">{type}</p>
//       </div>

//       {/* Car Image */}
//       <Link href={`/cars/${id}`}>
//         <div className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64">
//           <Image
//             src={urlFor(carImage).url()}
//             alt={`${name} image`}
//             layout="fill"
//             objectFit="contain"
//             priority
//             className="transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>
//       </Link>

//       {/* Features Section */}
//       <div className="flex justify-between px-4 py-2 text-xs sm:text-sm text-gray-700 gap-2 flex-wrap">
//         <div className="flex items-center gap-1">
//           <Image src="/fuel.png" alt="Fuel" width={18} height={18} />
//           <span>{fuelCapacity}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <Image src="/transmission.png" alt="Transmission" width={18} height={18} />
//           <span>{transmission}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <Image src="/capacity.png" alt="Passengers" width={18} height={18} />
//           <span>{passengers}</span>
//         </div>
//       </div>

//       {/* Price & Rent Button */}
//       <div className="flex justify-between items-center px-4 py-3 mt-auto">
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
//           ${numericPrice.toFixed(2)}
//         </p>
//         <Link
//           href={`/checkout/${id}`}
//           className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-700 text-xs sm:text-sm md:text-base"
//         >
//           Rent Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CarCard;


import Image from "next/image";
import React from "react";
import HeartButton from "./heart";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface CarCardProps {
  id: number;
  name: string;
  type: string;
  price: string;
  fuelCapacity: string;
  transmission: string;
  passengers: string;
  carImage?: string; // Made optional to prevent undefined errors
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  type,
  price,
  fuelCapacity,
  transmission,
  passengers,
  carImage,
}) => {
  // Ensure price is a valid number
  const numericPrice = parseFloat(price?.replace(/[^\d.-]/g, "") || "0");

  // Ensure carImage is valid, otherwise use a placeholder
  const carImageUrl = carImage ? urlFor(carImage).url() : "/placeholder-car.png";

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm bg-white border rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg group flex flex-col justify-between">
      {/* Heart Icon */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
        <HeartButton
          car={{
            id,
            name,
            type,
            price,
            fuelCapacity,
            transmission,
            passengers,
            carImage: carImageUrl,
          }}
        />
      </div>

      {/* Car Name & Type */}
      <div className="p-4">
        <Link href={`/cars/${id}`}>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300 truncate">
            {name}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">{type}</p>
      </div>

      {/* Car Image */}
      <Link href={`/cars/${id}`}>
        <div className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64">
          <Image
            src={carImageUrl}
            alt={`${name} image`}
            layout="fill"
            objectFit="contain"
            priority
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Features Section */}
      <div className="flex justify-between px-4 py-2 text-xs sm:text-sm text-gray-700 gap-2 flex-wrap">
        <div className="flex items-center gap-1">
          <Image src="/fuel.png" alt="Fuel" width={18} height={18} />
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/transmission.png" alt="Transmission" width={18} height={18} />
          <span>{transmission}</span>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/capacity.png" alt="Passengers" width={18} height={18} />
          <span>{passengers}</span>
        </div>
      </div>

      {/* Price & Rent Button */}
      <div className="flex justify-between items-center px-4 py-3 mt-auto">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
          ${numericPrice.toFixed(2)}
        </p>
        <Link
          href={`/checkout/${id}`}
          className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-700 text-xs sm:text-sm md:text-base"
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
