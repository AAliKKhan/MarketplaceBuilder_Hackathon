

"use client";

import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const cityLocations: Record<string, string[]> = {
  "New York": ["Manhattan", "Brooklyn", "Queens"],
  Toronto: ["Downtown", "Scarborough", "North York"],
  London: ["Central", "East London", "West London"],
};

interface LocationSelectorProps {
  title: string;
  onCityChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  city: string;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  title,
  onCityChange,
  onLocationChange,
  onDateChange,
  onTimeChange,
  city,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <input type="radio" checked readOnly className="text-blue-600" /> {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        {/* Location */}
        <div className="flex flex-col">
          <span className="font-medium text-gray-600">Location</span>
          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-600"
            onChange={(e) => onCityChange(e.target.value)}
          >
            <option value="">Select Country</option>
            {Object.keys(cityLocations).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        {/* Date */}
        <div className="flex flex-col">
          <span className="font-medium text-gray-600">Date</span>
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-600"
            onChange={(e) => onDateChange(e.target.value)}
          />
        </div>
        {/* Time */}
        <div className="flex flex-col">
          <span className="font-medium text-gray-600">Time</span>
          <input
            type="time"
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-600"
            onChange={(e) => onTimeChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const PickupDropoff: React.FC = () => {
  const [pickup, setPickup] = useState({ city: "", location: "", date: "", time: "" });
  const [dropoff, setDropoff] = useState({ city: "", location: "", date: "", time: "" });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 w-full max-w-4xl mx-auto">
      {/* Pick-Up Section */}
      <LocationSelector
        title="Pick-Up"
        city={pickup.city}
        onCityChange={(value) => setPickup((prev) => ({ ...prev, city: value }))}
        onLocationChange={(value) => setPickup((prev) => ({ ...prev, location: value }))}
        onDateChange={(value) => setPickup((prev) => ({ ...prev, date: value }))}
        onTimeChange={(value) => setPickup((prev) => ({ ...prev, time: value }))}
      />

      {/* Swap Icon */}
      <button className="bg-blue-100 p-3 rounded-full shadow-md text-blue-500 text-xl md:mx-4">
        <FaExchangeAlt />
      </button>

      {/* Drop-Off Section */}
      <LocationSelector
        title="Drop-Off"
        city={dropoff.city}
        onCityChange={(value) => setDropoff((prev) => ({ ...prev, city: value }))}
        onLocationChange={(value) => setDropoff((prev) => ({ ...prev, location: value }))}
        onDateChange={(value) => setDropoff((prev) => ({ ...prev, date: value }))}
        onTimeChange={(value) => setDropoff((prev) => ({ ...prev, time: value }))}
      />
    </div>
  );
};

export default PickupDropoff;
