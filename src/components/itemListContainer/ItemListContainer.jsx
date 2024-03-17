import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../itemList/ItemList";
import { getProducts } from "../../firebase/firebase";
import Testimonial from "./Testimonial";
import PromoSection from "./PromoSection";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { cid } = useParams();

  useEffect(() => {
    getProducts()
      .then((prods) => {
        const productos = prods.filter((prod) => prod.stock > 0);
        if (cid) {
          const productosFiltrados = prods.filter(
            (prod) => prod.category == cid
          );
          setProducts(productosFiltrados);
        } else {
          setProducts(prods);
        }
      })
      .catch((error) => console.log(error));
  }, [cid]);

  return (
    <>
      {!cid && <PromoSection />}
      {!cid && <Testimonial />}
      <div className="flex flex-wrap gap-3 justify-center">
        <ItemList products={products} plantilla="Item" />
      </div>
    </>
  );
};
