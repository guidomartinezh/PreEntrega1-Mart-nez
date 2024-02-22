import React from "react";
import Item from "../item/Item";

export default function ItemList({ products }) {
  if (products.length > 0) {
    return (
      <>
        {products.map((prod) => (
          <Item product={prod} />
        ))}
      </>
    );
  } else {
    return <p>Sorry, products not available.</p>;
  }
}
