import { useRef } from "react";
import { useCarritoContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createOrdenCompra,
  getOrdenCompra,
  getProduct,
  updateProduct,
} from "../../firebase/firebase";

export const CheckOut = () => {
  const formRef = useRef();
  const navigate = useNavigate(); //Devuelve la locacion actual de mi componente (ruta)
  const { carrito, totalPrice, emptyCart } = useCarritoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current); //Paso un formulario HTML a un objeto iterator
    const cliente = Object.fromEntries(datForm); //Paso un objeto iterator a un objeto simple

    //Modificar stock

    const aux = [...carrito];

    aux.forEach((prodCarrito) => {
      getProduct(prodCarrito.id).then((prodBDD) => {
        if (prodBDD.stock >= prodCarrito.quantity) {
          //Si existe stock suficinete para realizar la compra
          prodBDD.stock -= prodCarrito.quantity;
          updateProduct(prodBDD.id, prodBDD);
        } else {
          toast.info(
            `El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          aux.filter((prod) => prod.id != prodBDD.id); //Elimino el producto del carrito al tener stock suficiente
        }
      });
    });
    //Generar la orden de Compra
    const aux2 = aux.map((prod) => ({
      id: prod.id,
      quantity: prod.quantity,
      price: prod.price,
    }));

    createOrdenCompra(
      cliente,
      totalPrice(),
      aux2,
      new Date().toLocaleDateString("es-AR", {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
    )
      .then((ordenCompra) => {
        toast.success(
          `🛒 Thank you very much for shopping with us, your purchase ID is: ${
            ordenCompra.id
          } for a total of $${totalPrice()}. We will contact you shortly for shipment`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );

        emptyCart();
        e.target.reset();
        navigate("/");
      })
      .catch((e) => {
        toast.error(`Error al generar orden de compra: ${e}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return (
    <>
      {carrito.length === 0 ? (
        <>
          <h2>Para finalizar compra debe tener productos en el carrito</h2>
          <Link to={"/"}>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              Volver al inicio
            </button>
          </Link>
        </>
      ) : (
        <div className="max-w-md mx-auto p-6 mt-2 bg-black-200 rounded-md shadow-md">
          <form action="" ref={formRef} onSubmit={handleSubmit}>
            <label className="block mb-1 text-black-700">Name: </label>
            <input
              type="text"
              className="w-full p-2 mb-3 border rounded-md"
              name="name"
            />
            <label className="block mb-1 text-black-700">Surname: </label>
            <input
              type="text"
              className="w-full p-2 mb-3 border rounded-md"
              name="Surname"
            />
            <label className="block mb-1 text-black-700">Adress: </label>
            <input
              type="text"
              className="w-full p-2 mb-3 border rounded-md"
              name="Adress"
            />
            <label className="block mb-1 text-black-700">ID: </label>
            <input
              type="number"
              className="w-full p-2 mb-3 border rounded-md"
              name="ID"
            />
            <label className="block mb-1 text-black-700">Email: </label>
            <input
              type="email"
              className="w-full p-2 mb-3 border rounded-md"
              name="email"
            />
            <label className="block mb-1 text-black-700">Phone Number: </label>
            <input
              type="number"
              className="w-full p-2 mb-3 border rounded-md"
              name="telefono"
            />
            <button
              type="submit"
              className="w-full p-2 bg-orange-500 text-black rounded-md hover:bg-green-600"
            >
              Buy
            </button>
          </form>
        </div>
      )}
    </>
  );
};
