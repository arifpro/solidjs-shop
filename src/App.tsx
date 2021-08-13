import { Component, createSignal, createResource } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ProductDetail } from "./components/ProductDetail";

const App: Component = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
