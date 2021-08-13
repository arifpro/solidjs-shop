import { Component, createSignal } from "solid-js";
// import styles from "./App.module.css";
import { Header } from "./components/Header";
import { ProductInterface } from "./interface";

const App: Component = () => {
  const [cart, setCart] = createSignal<ProductInterface[]>([]);
  const [search, setSearch] = createSignal("");

  return (
    <>
      <Header
        cart={cart}
        search={search}
        onClearCart={() => setCart([])}
        onSetSearch={(str) => setSearch(str)}
      />
    </>
  );
};

export default App;
