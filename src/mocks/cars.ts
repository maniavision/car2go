import { Car, FuelType } from "../app/core/models/car.model";

export const mockCars: Car[] = [
  {
    id: 'clvwnp8a4000108l43ad071l3',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
    fuelType: FuelType.Gasoline,
    mileage: 50000,
    price: 50000,
    images: ['./assets/images/toyota.jpg'],
    // pricePerDay: 50,
    // available: true,
    // location: { lat: 34.0522, lng: -118.2437 },
    // imageUrl: '/images/toyota-camry.jpg',
  },
  {
    id: 'clvwnp8a4000208l4h2g1c8f4',
    make: 'Honda',
    model: 'Civic',
    year: 2023,
    color: 'Blue',
    fuelType: FuelType.Gasoline,
    mileage: 50000,
    price: 50000,
    images: ['./assets/images/2023-Honda-Civic.jpg']
  },
  {
    id: 'clvwnp8a4000308l4e9f2a7b5',
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    color: 'Red',
    fuelType: FuelType.Gasoline,
    mileage: 50000,
    price: 50000,
    images: ['./assets/images/2021-Ford-Mustang.jpg']
  },
  {
    id: 'clvwnp8a4000408l4b9c8d6e7',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    color: 'White',
    fuelType: FuelType.Gasoline,
    mileage: 50000,
    price: 50000,
    images: ['./assets/images/tesla.jpg']
  },
  {
    id: 'clvwnp8a4000508l4f1g2h3i4',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    color: 'Black',
    fuelType: FuelType.Gasoline,
    mileage: 50000,
    price: 50000,
    images: ['./assets/images/2022-BMW-X5-M.jpg']
  },
];
