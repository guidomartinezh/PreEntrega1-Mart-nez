import * as React from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbarr } from "./components/navbar/Navbar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { ItemDetailsContainer } from "./components/itemDetailsContainer/ItemDetailsContainer";
import { Cart } from "./components/cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/notFound/NotFound";
import { CheckOut } from "./components/checkout/CheckOut";
import { CarritoProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbarr />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:cid" element={<ItemListContainer />} />
            <Route path="/product/:pid" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CarritoProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
};
