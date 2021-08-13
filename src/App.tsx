import { Component, createSignal, createResource } from "solid-js";
import { Routes, Route } from "solid-app-router";
// import styles from "./App.module.css";
import { Header } from "./components/Header";
import { ProductInterface } from "./interface";
import { HomePage } from "./components/HomePage";

const App: Component = () => {
  const [cart, setCart] = createSignal<ProductInterface[]>([]);
  const [search, setSearch] = createSignal("");

  const [products] = createResource<ProductInterface[]>(
    () => fetch("http://fakestoreapi.com/products").then((res) => res.json()),
    { initialValue: [] }
  );

  return (
    <>
      <Header
        cart={cart}
        search={search}
        onClearCart={() => setCart([])}
        onSetSearch={(str) => setSearch(str)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              search={search}
              products={products}
              onAddToCart={(newProduct) => setCart([...cart(), newProduct])}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
