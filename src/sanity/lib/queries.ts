import { groq } from "next-sanity";

export const allCars = groq`*[_type== "car"]`;
export const popularCars = groq`*[_type == "car"][0..4]`;
export const bestPriceCars = groq`*[_type == "car"][5..9]`;
export const luxuryCars = groq`*[_type == "car"][10..15]`;


// export const popularCars = groq`*[type == "car"] [0..4]`