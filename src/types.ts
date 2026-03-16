export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string;
  description: string;
  price: number;
  image: string;
  hoverImage: string;
  material: string;
  technique: string;
  sizes: string[];
  colors: string[];
  care: string;
  isFeatured?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}
