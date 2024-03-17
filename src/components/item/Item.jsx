import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="flex items-center justify-center">
      <div>
        <img src={`${product.img}`} alt={`Imagen de ${product.title}`} />
        <h2 className="text-2xl font-bold mb-2 button-detail flex items-center justify-center">
          {product.title} {product.description}
        </h2>
        <p className="text-gray-900 mb-2 font-mono font-semibold flex items-center justify-center">
          Price: ${product.price}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="flex items-center justify-center"
        >
          <button className="font-mono bg-yellow-500 text-black px-6 py-2 rounded hover:bg-orange-600">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
}
