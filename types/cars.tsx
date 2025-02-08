export interface Car {
    id:number;
    name: string; // Car Name
    brand: string; // Brand of the car (e.g., Nissan, Tesla, etc.)
    type: string; // Type of the car (e.g., Sport, Sedan, SUV, etc.)
    fuelCapacity: string; // Fuel or battery capacity (e.g., 90L, 100kWh)
    transmission: string; // Type of transmission (e.g., Manual, Automatic)
    seatingCapacity: string; // Number of seats (e.g., 2 People, 4 seats)
    pricePerDay: string; // Rental price per day
    originalPrice: string; // Original price before discount (if applicable)
    tags: string[]; // Tags for categorization (e.g., popular, recommended)
    slug:{
      type:"slug"
      current:string
    }
    image: {
      asset: {
        _ref: string; // Reference to the image
        _type: string; // Type of the image object
      };
      hotspot?: {
        x: number; // X coordinate for the hotspot
        y: number; // Y coordinate for the hotspot
        height: number; // Height of the hotspot
        width: number; // Width of the hotspot
      };
    };
  }
  