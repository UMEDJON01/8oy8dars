import React from "react";
import { useCollection } from "../hooks/useCollection";

const ProductsList = () => {
  const { data: products } = useCollection("products", [
    "field",
    "==",
    "value",
  ]);

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
