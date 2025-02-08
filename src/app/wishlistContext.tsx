// // "use client";
// // import { createContext, useContext, useState } from "react";

// // interface Car {
// //   id: number;
// //   name: string;
// //   type: string;
// //   price: string;
// //   fuelCapacity: string;
// //   transmission: string;
// //   passengers: string;
// //   carImage: string;
// // }

// // interface WishlistContextType {
// //   wishlist: Car[];
// //   toggleWishlist: (car: Car) => void;
// // }

// // const WishlistContext = createContext<WishlistContextType | undefined>(
// //   undefined
// // );

// // export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
// //   children,
// // }) => {
// //   const [wishlist, setWishlist] = useState<Car[]>([]);

// //   const toggleWishlist = (car: Car) => {
// //     setWishlist((prev) =>
// //       prev.some((c) => c.id === car.id)
// //         ? prev.filter((c) => c.id !== car.id)
// //         : [...prev, car]
// //     );
// //   };

// //   return (
// //     <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
// //       {children}
// //     </WishlistContext.Provider>
// //   );
// // };

// // export const useWishlist = () => {
// //   const context = useContext(WishlistContext);
// //   if (!context) {
// //     throw new Error("useWishlist must be used within a WishlistProvider");
// //   }
// //   return context;
// // };



// "use client";
// import { createContext, useContext, useEffect, useState } from "react";

// interface Car {
//   id: number;
//   name: string;
//   type: string;
//   price: string;
//   fuelCapacity: string;
//   transmission: string;
//   passengers: string;
//   carImage: string;
// }

// interface WishlistContextType {
//   wishlist: Car[];
//   toggleWishlist: (car: Car) => void;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(
//   undefined
// );

// export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [wishlist, setWishlist] = useState<Car[]>(() => {
//     if (typeof window !== "undefined") {
//       const savedWishlist = localStorage.getItem("wishlist");
//       return savedWishlist ? JSON.parse(savedWishlist) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   const toggleWishlist = (car: Car) => {
//     setWishlist((prev) => {
//       const isCarInWishlist = prev.some((c) => c.id === car.id);
//       const updatedWishlist = isCarInWishlist
//         ? prev.filter((c) => c.id !== car.id)
//         : [...prev, car];

//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error("useWishlist must be used within a WishlistProvider");
//   }
//   return context;
// };


"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface Car {
  id: number;
  name: string;
  type: string;
  price: string;
  fuelCapacity: string;
  transmission: string;
  passengers: string;
  carImage: string;
}

interface WishlistContextType {
  wishlist: Car[];
  toggleWishlist: (car: Car) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<Car[]>(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (car: Car) => {
    setWishlist((prev) => {
      const isCarInWishlist = prev.some((c) => c.id === car.id);
      const updatedWishlist = isCarInWishlist
        ? prev.filter((c) => c.id !== car.id)
        : [...prev, car];

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

// Wishlist Component to Display Cars in Wishlist
const Wishlist: React.FC = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No cars in wishlist.</p>
      ) : (
        <ul>
          {wishlist.map((car) => (
            <li key={car.id}>
              <h3>{car.name}</h3>
              <p>Type: {car.type}</p>
              <p>Price: {car.price}</p>
              <p>Fuel Capacity: {car.fuelCapacity}</p>
              <p>Transmission: {car.transmission}</p>
              <p>Passengers: {car.passengers}</p>
              <img src={car.carImage} alt={car.name} width="100" />
              <button onClick={() => toggleWishlist(car)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
