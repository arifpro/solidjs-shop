import { createSignal, createResource } from "solid-js";
import { createMutable } from "solid-js/store";
import { ProductInterface } from "./../interface/index";

// cart
export const cart = createMutable({
//   products: [] as ProductInterface[],
  products: JSON.parse(window.localStorage.getItem('cart') || '[]') as ProductInterface[],
  get total() {
    return this.products.reduce((acc, p) => acc + p.price, 0);
  },
  addToCart(product: ProductInterface) {
    this.products.push(product);
    window.localStorage.setItem('cart', JSON.stringify(this.products));
  },
  clearCart() {
    this.products = [];
    window.localStorage.setItem('cart', JSON.stringify(this.products));
  },
});
// export const [cart, setCart] = createSignal<ProductInterface[]>([]);
// export const onAddToCart = (p: ProductInterface) => setCart(cart().concat(p));
// export const onClearCart = () => setCart([]);

// search
export const [search, setSearch] = createSignal("");
export const onSetSearch = (s: string) => setSearch(s);

// products
export const [products] = createResource<ProductInterface[]>(
  () => fetch("http://fakestoreapi.com/products").then((res) => res.json()),
  { initialValue: [] }
);
