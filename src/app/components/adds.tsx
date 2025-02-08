import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Adds = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[70px] px-4 sm:px-6 lg:px-8">
      {/* Wrapper for all Ads */}
      <div className="flex  gap-8 justify-evenly lg:justify-start">

        {/* Add 1 */}
        <div className="relative w-full sm:w-[690px] h-[300px] bg-blue-500 overflow-hidden border rounded-lg p-6 shadow-md transition-all duration-300 hover:scale-105">
          {/* Background Pattern */}
          <Image
            src="/blue.png" // Replace with your background pattern image path
            alt="Background Pattern"
            layout="fill"
            objectFit="cover"
            className="absolute"
            priority
          />
          {/* Text Content */}
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white mb-3">Easy way to rent a car at a low price</h1>
            <p className="text-white mb-6">
              Providing cheap car rental services and <br />safe and comfortable facilities.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-300 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-400 hover:text-white transition"
            >
              Rent Now
            </Link>
          </div>
          {/* Car Image */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-6">
            <Image
              src="/gtr.png" // Replace with your car image path
              alt="Car Image"
              layout="intrinsic"
              width={300}
              height={150}
              objectFit="contain"
              priority
            />
          </div>
        </div>

        {/* Add 2 - Hidden on small screens */}
        <div className="relative w-full sm:w-[690px] h-[300px] bg-blue-500 overflow-hidden border rounded-lg p-6 shadow-md transition-all duration-300 hover:scale-105 hidden lg:block">
          {/* Background Pattern */}
          <Image
            src="/blue.png" // Replace with your background pattern image path
            alt="Background Pattern"
            layout="fill"
            objectFit="cover"
            className="absolute"
            priority
          />
          {/* Text Content */}
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white mb-3">Best Packages for rentals</h1>
            <p className="text-white mb-6">
              Wide range of packages and pricing <br /> for rentals and owners.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-300 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-400 hover:text-white transition"
            >
              Rent Now
            </Link>
          </div>
          {/* Car Image */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-6">
            <Image
              src="/mgz5.png" // Replace with your car image path
              alt="Car Image"
              layout="intrinsic"
              width={300}
              height={150}
              objectFit="contain"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Adds;