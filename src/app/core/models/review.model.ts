export interface Review {
  id: string;
  userId: string;
  carId: string;
  rating: number;       // 1–5 scale
  comment: string;
  imageUrls: string[];  // photos of the delivered car
  date: string;         // ISO date string
}
