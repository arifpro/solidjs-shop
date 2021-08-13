import { Component, createSignal, createResource } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";

const App: Component = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
      </Routes>
    </>
  );
};

export default App;
