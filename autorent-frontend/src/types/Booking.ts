export interface Booking {
  id: number;
  carId: number;
  carBrand: string;
  carModel: string;
  startDate: string;
  endDate: string;
  price: number | null;
  status: string;
}
