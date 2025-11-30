export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  priceHour: number | null;
  priceDay: number | null;
  imageUrl: string | null;
}
