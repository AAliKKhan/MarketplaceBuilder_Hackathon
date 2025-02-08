
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { Car } from '../../../types/cars';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => (source ? builder.image(source).url() : '');

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await client.fetch(`*[_type == "car"]`);
      setCars(data);
    };
    fetchCars();
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    setSearchHistory(storedHistory);
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setShowDropdown(false);
      setFilteredCars([]);
    } else {
      const results = cars.filter((car) =>
        (car.name?.toLowerCase() || '').includes(query.toLowerCase()) ||
        (car.brand?.toLowerCase() || '').includes(query.toLowerCase()) ||
        (car.type?.toLowerCase() || '').includes(query.toLowerCase())
      );
      setFilteredCars(results);
      setShowDropdown(true);
    }
  }, [query, cars]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    const updatedHistory = [searchTerm, ...searchHistory.filter(item => item !== searchTerm)].slice(0, 3);
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="relative max-w-xl mx-auto mt-6 w-full">
      <div className="flex items-center border rounded-full shadow-md bg-white p-2 transition focus-within:ring-2 focus-within:ring-blue-500">
        <input
          type="text"
          placeholder="Search cars by name, brand, or type..."
          className="w-full px-4 py-2 outline-none text-gray-700 text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowDropdown(true)}
        />
      </div>
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-white border rounded-lg shadow-xl mt-2 z-50 max-h-[350px] overflow-auto"
        >
          {searchHistory.length > 0 && (
            <div className="p-3 border-b bg-gray-50">
              <p className="text-xs text-gray-500 font-semibold mb-2">Recent Searches</p>
              {searchHistory.map((item, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 rounded-md transition"
                  onClick={() => handleSearch(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <Link key={car.id || car.slug?.current} href={`/cars/${car.id || car.slug?.current}`}>
                <div className="flex items-center p-3 hover:bg-gray-100 transition cursor-pointer rounded-md">
                  {car.image?.asset?._ref && (
                    <Image
                      src={urlFor(car.image.asset)}
                      alt={car.name || 'Car Image'}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                  )}
                  <div className="ml-3">
                    <h3 className="text-sm font-semibold text-gray-900">{car.name}</h3>
                    <p className="text-xs text-gray-500">{car.brand} - {car.type}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="p-3 text-sm text-gray-500">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
