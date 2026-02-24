import React from "react";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import Item from "../components/Item";

const ProductsPage = () => {
  // No search/filter required — render all products
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    return (
      <div>
        <span>Error while fetching products</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <main className="my-24">
      <div className="max-padd-container py-10 bg-gradient-to-r from-green-50 via-white to-white">
        <div>
          {/* CONTAINER */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10">
            {data.map((product) => (
              <Item key={product.title} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
