export enum FuelType {
  Gasoline = 'Gasoline',
  Diesel   = 'Diesel',
  Electric = 'Electric',
  Hybrid   = 'Hybrid'
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  fuelType: FuelType;
  mileage: number;      // in kilometers
  color: string;
  price: number;        // in USD
  images: string[];     // array of image URLs
}
