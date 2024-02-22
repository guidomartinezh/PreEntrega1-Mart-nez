import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbarr } from "./components/navbar/Navbar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { ItemDetailsContainer } from "./components/itemDetailsContainer/ItemDetailsContainer";
import { Cart } from "./components/cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/notFound/NotFound";
import { CheckOut } from "./components/checkOut/CheckOut";

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

export const App = () => {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <BrowserRouter>
          <Navbarr />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:cid" element={<ItemListContainer />} />
            <Route path="/product/:pid" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraBaseProvider>
    </>
  );
};
