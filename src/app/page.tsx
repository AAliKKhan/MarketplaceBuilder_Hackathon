// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Car } from "../../types/cars"; // Interface for the Car type
// import { client } from "@/sanity/lib/client"; // Sanity client
// import { allCars } from "@/sanity/lib/queries"; // GROQ query for fetching cars
// import { urlFor } from "@/sanity/lib/image"; // Function to generate Sanity image URLs

// const Page = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const fetchedCars: Car[] = await client.fetch(allCars);
//         setCars(fetchedCars);
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//         setError("Failed to load car data. Please try again later.");
//       }
//     };
//     fetchCars();
//   }, []);

//   return (
//     <div className="p-8 space-y-6">
//       <h1 className="text-3xl font-bold text-center">Available Cars</h1>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {cars.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cars.map((car) => (
//             <div
//               key={car.id} // Ensure `car.id` is unique for each car
//               className="border border-gray-300 p-4 rounded-lg shadow-lg"
//             >
//               {/* Car Image */}
//               {car.image && (
//                 <div className="mb-4">
//                   <Image
//                     src={urlFor(car.image).url()}
//                     alt={`${car.name} image`}
//                     width={300}
//                     height={200}
//                     className="rounded-md object-cover"
//                   />
//                 </div>
//               )}

//               {/* Car Details */}
//               <h2 className="text-xl font-bold mb-2">{car.name}</h2>
//               <p className="text-gray-700">Brand: {car.brand}</p>
//               <p className="text-gray-700">Type: {car.type}</p>
//               <p className="text-gray-700">Fuel Capacity: {car.fuelCapacity}</p>
//               <p className="text-gray-700">Transmission: {car.transmission}</p>
//               <p className="text-gray-700">
//                 Seating Capacity: {car.seatingCapacity}
//               </p>
//               <p className="text-gray-700">
//                 Price Per Day: <span className="font-bold">{car.pricePerDay}</span>
//               </p>
//               <p className="text-gray-700">
//                 Original Price: <span className="line-through">{car.originalPrice}</span>
//               </p>

//               {/* Tags Section */}
//               {car.tags?.length > 0 && (
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {car.tags.map((tag, index) => (
//                     <span
//                       key={`${tag}-${index}`} // Using tag and index to create a unique key
//                       className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         !error && <p className="text-gray-600 text-center">No cars available at the moment.</p>
//       )}
//     </div>
//   );
// };

// export default Page;


import React from 'react'
import Adds from './components/adds'
import PickupDropoff from './components/selectors'
import CarSections from './components/carSections'
import Link from 'next/link'



const page = () => {
  return (
    <div className=' mx-auto'>

      <Adds></Adds>
      <PickupDropoff></PickupDropoff>
      <CarSections></CarSections>
      <div className="flex justify-center items-center h-full w-full mt-[100px]">
      <Link
      href="./AllCARS"
      className="relative text-blue-600 font-semibold  transition-all duration-300 
                 hover:text-blue-800 after:absolute after:left-0 after:bottom-0 after:w-0 
                 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 
                 hover:after:w-full text-3xl flex justify-center]"
    >
    Explore More
    </Link>
    </div>
    </div>
  )
}

export default page


