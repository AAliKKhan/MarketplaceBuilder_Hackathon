import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Car } from "../../../types/cars";


export async function getCar(id: string): Promise<Car | null> {
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
      "image": image.asset->url
    }
  `;

  const car = await client.fetch(query, { id: parseInt(id) });
  return car;
}