import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CartContext";
import { ItemList } from "../itemList/ItemList";
import "./cart.css";

export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext();

  return (
    <>
      {carrito.length === 0 ? (
        <div className="cart">
          <h1 className="flex items-center justify-center leyenda">
            Empty Cart
          </h1>
          <div className="flex items-center justify-center cart">
            <button className="bg-yellow-300 text-black px-4 py-2 rounded button-cart">
              <Link to={"/"}>Back to home</Link>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {<ItemList products={carrito} plantilla="ItemCart" />}
          <div>
            <p>Cart resume: $ {totalPrice()}</p>
            <button
              className="bg-gray-500 text-black px-4 py-2 rounded"
              onClick={emptyCart}
            >
              Empty Cart
            </button>
            <button className="bg-gray-500 text-black px-4 py-2 rounded">
              <Link to={"/"}>Continue shopping</Link>
            </button>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-green-600">
              <Link to={"/checkout"}>Checkout</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
