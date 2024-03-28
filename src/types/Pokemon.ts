export type Pokemon = {
  id: number;
  name: string;
  description: string;
  category: string;
  images: {
    small: string;
    large: string;
  };
  price: number;
  qty: number;
  subtotal: number;
  rating: {
    rate: number;
    count: number;
  };
};

