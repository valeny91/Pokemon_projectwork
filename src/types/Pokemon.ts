export type Pokemon = {
  image: { images: { small: string; large: string; }; id: number; name: string; };
    id: number;
    name: string;
    prices: number;
    description: string;
    category: string;
  images: {
      small: string;
      large: string;
    };
    rating: {
      rate: number;
      count: number;
    };
    quantity: number
  };
