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
