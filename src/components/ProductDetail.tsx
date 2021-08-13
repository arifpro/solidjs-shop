import { Component, createMemo } from "solid-js";
import { useParams } from "solid-app-router";
import { products, onAddToCart } from "../store";

export const ProductDetail: Component = () => {
  const { id } = useParams<{ id: string }>();

  const product = createMemo(() =>
    products().find((p) => p.id === parseInt(id))
  );

  return (
    <div class="p-10">
      {product() && (
        <>
          <h3 class="title font-bold text-3xl truncate w-full max-w-full mb-8">
            {product().title}
          </h3>
          <div class="grid grid-cols-2 gap-10">
            <div class="w-full flex justify-center">
              <img
                src={product().image}
                alt={product().title}
                class="text-center h-96"
              />
            </div>
            <div class="bg-white p-3">
              <div>
                <div class="text-lg overflow-ellipsis description">
                  {product().description}
                </div>
                <div class="flex flex-row mt-2">
                  <div class="text-md mt-1 font-bold text-gray-600">{product().category}</div>
                  <div class="text-2xl text-right flex-grow justify-end mt-1 mr-4">
                    {product().price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                  <button
                    onClick={(evt) => {
                      evt.stopPropagation();
                      onAddToCart(product());
                    }}
                    class="text-2xl px-8 py-1 font-bold bg-gray-800 text-white rounded-full"
                  >
                    <i class="fas fa-cart-plus mr-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
