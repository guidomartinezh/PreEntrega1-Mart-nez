import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../cartWidget/CartWidget";

export default function Categories() {
  return (
    <>
      <li>
        <Link
          to={"/"}
          className="text-black px-4 py-2 rounded-full flex items-center hover:bg-yellow-200"
        >
          home
        </Link>
      </li>
      <li>
        <Link
          to={"/category/travel"}
          className="text-black px-4 py-2 rounded-full flex items-center hover:bg-yellow-200"
        >
          travel
        </Link>
      </li>
      <li>
        <Link
          to={"/category/office"}
          className="text-black px-4 py-2 rounded-full flex items-center hover:bg-yellow-200"
        >
          office
        </Link>
      </li>
      <li>
        <Link
          to={"./category/apparel"}
          className="text-black px-4 py-2 rounded-full flex items-center hover:bg-yellow-200"
        >
          apparel
        </Link>
      </li>
      <CartWidget />
    </>
  );
}
