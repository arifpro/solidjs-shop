export interface ProductInterface {
  id: number;
  image: string;
  price: number;
  title: string;
  category: string;
  description: string;
}

export interface HeaderInterface {
  cart: () => ProductInterface[];
  onClearCart: () => void;
  search: () => string;
  onSetSearch: (search: string) => void;
}

export interface HomePageInterface {
  products: () => ProductInterface[];
  onAddToCart: (product: ProductInterface) => void;
  search: () => string;
}