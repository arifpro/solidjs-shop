import { createSignal, createResource } from "solid-js";
import { ProductInterface } from "./../interface/index";

// cart
export const [cart, setCart] = createSignal<ProductInterface[]>([]);
export const onAddToCart = (p: ProductInterface) => setCart(cart().concat(p));
export const onClearCart = () => setCart([]);

// search
export const [search, setSearch] = createSignal("");
export const onSetSearch = (s: string) => setSearch(s);

// products
export const [products] = createResource<ProductInterface[]>(
  () => fetch("http://fakestoreapi.com/products").then((res) => res.json()),
  { initialValue: [] }
);
