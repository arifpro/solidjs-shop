import { Component, createMemo, For } from "solid-js";
import { Link } from "solid-app-router";
import { cart, onClearCart, onSetSearch, search } from "../store";

export const Header: Component = () => {
  const total = createMemo(() =>
    cart().reduce((total, p) => total + p.price, 0)
  );

  return (
    <div class="bg-gray-600 text-white flex flex-row w-full py-2 rounded-b-xl">
      <div class="text-2xl px-10 py-2">
        <Link href="/">
          <i class="fas fa-store-alt mr-2"></i>
          SolidJS-Shop
        </Link>
      </div>
      <div class="flex-grow">
        <input
          type="text"
          value={search()}
          onKeyUp={(e) => onSetSearch(e.currentTarget.value)}
          class="p-1 my-2 text-xl bg-white text-black rounded-lg max-w-md w-96"
        />
      </div>
      <div class="px-10 py-2 justify-end has-tooltip">
        <span class="tooltip cart">
          <div>Cart ({cart().length})</div>
          <For each={cart()}>
            {(p) => (
              <div class="flex flex-row my-2">
                <img src={p.image} alt={p.title} class="h-8 mr-2" />
                <h3 class="title text-md truncate flex-grow">{p.title}</h3>
                <div class="text-md text-right flex-grow justify-end ml-2">
                  {p.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
            )}
          </For>

          <div class="flex">
            <button
              onClick={onClearCart}
              class="text-md px-8 py-1 font-bold bg-gray-800 text-white rounded-full"
            >
              Clear Cart
            </button>
            <div class="text-md text-right flex-grow justify-end ml-2">
              {total().toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </div>
        </span>
        <i class="fas fa-shopping-cart mr-2"></i>
        <span class="font-bold text-xl">{cart().length}</span>
      </div>
    </div>
  );
};
