import { Link } from "react-router-dom";
import { useCounter } from "../../hooks/useCounter";
import { useCarritoContext } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCarritoContext();
  const { count, increment, decrement, reset } = useCounter(1, item.stock, 1);

  const handleAddToCart = () => {
    addItem(item, count);
  };

  return (
    <div className="bg-white p-8 rounded-lg max-w-md">
      <div>
        <Link to={"/"}>
          <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-red-400">
            Close
          </button>
        </Link>
      </div>

      <img
        className="w-full h-80 object-cover mb-3 mx-auto"
        src={`${item.img}`}
        alt={`Imagen de ${item.title}`}
      />

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 button-detail">{item.title}</h2>
        <p className="text-gray-500 mb-2 font-mono font-semibold">
          Size: {item.size}
        </p>
        <p className="text-gray-500 mb-2 font-mono font-semibold">
          Stock: {item.stock}
        </p>
        <p className="text-gray-900 mb-2 font-mono font-semibold">
          Price: $ {item.price}
        </p>
        <div className="container mx-auto mt-8">
          <div className="flex items-center justify-center space-x-4">
            <button
              className="bg-gray-500 text-black px-4 py-2 rounded"
              onClick={decrement}
            >
              -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
              className="bg-gray-500 text-black px-4 py-2 rounded"
              onClick={increment}
            >
              +
            </button>
            <button
              className="bg-gray-500 text-black px-4 py-2 rounded"
              onClick={reset}
            >
              Reset
            </button>
            <button
              className="font-mono bg-yellow-500 text-black px-6 py-2 rounded hover:bg-orange-600"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
