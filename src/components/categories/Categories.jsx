import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../cartWidget/CartWidget";

export default function Categories() {
  return (
    <>
      <Link to={"/"}>
        <li
          expand="lg"
          href=""
          style={{ fontFamily: "Arial, sans-serif", color: "black" }}
        >
          home
        </li>
      </Link>
      <Link to={"/category/travel"}>
        <li
          expand="lg"
          href=""
          style={{ fontFamily: "Arial, sans-serif", color: "black" }}
        >
          travel
        </li>
      </Link>
      <Link to={"/category/office"}>
        <li href="" style={{ fontFamily: "Arial, sans-serif", color: "black" }}>
          office
        </li>
      </Link>
      <Link to={"./category/apparel"}>
        <li href="" style={{ fontFamily: "Arial, sans-serif", color: "black" }}>
          apparel
        </li>
      </Link>
      <CartWidget />
    </>
  );
}
