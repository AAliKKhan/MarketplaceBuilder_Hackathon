


import { Car } from "../../../../types/cars";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import Link from "next/link";
import HeartButton from "../../components/heart";
import SimilarCars from "../../components/similarCars";
import Feedbacks from "../../components/feedbacks";

interface CarPageProps {
  params: { id: string };
}

async function getCar(id: string): Promise<Car | null> {
  const query = groq`
    *[_type == "car" && id == $id][0] {
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      tags,
      "image": image.asset->url
    }
  `;

  const car = await client.fetch(query, { id: parseInt(id) });
  return car;
}

export default async function ProductPage({ params }: CarPageProps) {
  const { id } = params;
  const car = await getCar(id);

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Car Not Found</h1>
      </div>
    );
  }

  return (
    

    <div>
    <div className="flex flex-col md:flex-row gap-6 p-4 max-w-7xl mx-auto">
      {/* Left Section: Images */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="w-full h-64 md:h-96 flex justify-center items-center border rounded-md overflow-hidden">
          <Image src={urlFor(car.image).url()} alt="Car view" width={400} height={250} className="w-auto h-auto max-w-full max-h-full object-cover" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Image src={urlFor(car.image).url()} alt="Car view" width={60} height={60} className="w-full h-24 object-cover rounded-md" />
          <Image src="/interior1.png" alt="Thumbnail 2" width={100} height={80} className="w-full h-24 object-cover rounded-md" />
          <Image src="/interior2.png" alt="Thumbnail 3" width={100} height={80} className="w-full h-24 object-cover rounded-md" />
        </div>
      </div>

      {/* Right Section: Car Details */}
      <div className="w-full md:w-1/2 bg-white border rounded-lg p-6 shadow-md ">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{car.name}</h1>
            <Image src="/reviews.png" alt="Review stars" width={230} height={70} />
          </div>
          {/* <HeartButton /> */}
          <HeartButton 
  car={{ 
    id: parseInt(id),
    name: car.name,
    type: car.type,
    price: car.pricePerDay,
    fuelCapacity: car.fuelCapacity,
    transmission: car.transmission,
    passengers: car.seatingCapacity,
    carImage: urlFor(car.image).url()
  }} 
/>
        </div>
        <p className="text-gray-600 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusamus quia sequi odio ut ducimus! Omnis cum earum, perferendis minima laudantium, sunt cupiditate nisi, rerum vero veritatis commodi repellendus exercitationem.</p>
        <div className="grid grid-cols-2 gap-4 text-sm mt-7">
          <div>
            <h2 className="text-gray-800 font-bold text-xl">Car Type</h2>
            <p className="text-gray-600">{car.type}</p>
          </div>
          <div>
            <h2 className="text-gray-800 font-bold text-xl">Capacity</h2>
            <p className="text-gray-600">{car.seatingCapacity} people</p>
          </div>
          <div>
            <h2 className="text-gray-800 font-bold text-xl">Transmission</h2>
            <p className="text-gray-600">{car.transmission}</p>
          </div>
          <div>
            <h2 className="text-gray-800 font-bold text-xl">Fuel</h2>
            <p className="text-gray-600">{car.fuelCapacity}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <h3 className="text-xl font-bold text-gray-800">{car.pricePerDay}</h3>
          <Link  href={`/checkout/${id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Rent Now</Link>
        </div>

      </div>
    
    </div>
    <Feedbacks />
    <div className="max-w-7xl mx-auto mt-[40px]">
    <h1 className="p-6 text-3xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 group-hover:from-blue-800 group-hover:to-blue-500 transition-all duration-500 mb-2">
          Similar Cars
        </h1>

    <SimilarCars/>
    </div>
    </div>
  );
 }
