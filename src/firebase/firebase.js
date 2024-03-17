import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-IcJ5N7m2q89xrNhipZK1tcQo4Jwhk4k",
  authDomain: "mi-ecommerce-f6a74.firebaseapp.com",
  projectId: "mi-ecommerce-f6a74",
  storageBucket: "mi-ecommerce-f6a74.appspot.com",
  messagingSenderId: "934116212951",
  appId: "1:934116212951:web:9ca74bfa66c3fe81a87092",
};

const app = initializeApp(firebaseConfig);

// Para consultar a la base de datos

const bdd = getFirestore();

/*

Acciones para hacer con la base de datos:

READ - UPDATE - DELETE - CREATE

Esto se conoce como (CRUD):

C reate
R ead
U pdate
D elete

*/

// Crear productos

const prods = [
  {
    title: "Case 1",
    size: "Large",
    price: 1500,
    stock: 10,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/1.jpg?alt=media&token=4bf0af40-cb13-4e02-903b-203effe3178c",
    category: "travel",
  },
  {
    title: "Case 2",
    size: "Small",
    price: 2200,
    stock: 15,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/2.jpg?alt=media&token=dae7faef-a818-47f4-b787-e2c8198f8805",
    category: "travel",
  },
  {
    title: "Case 3",
    size: "Medium",
    price: 2100,
    stock: 9,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/3.jpg?alt=media&token=00e52a56-3d74-49a8-95ba-44f858a78be4",
    category: "travel",
  },
  {
    title: "Mug 1",
    size: "Small",
    price: 1800,
    stock: 10,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/4.jpg?alt=media&token=3bb7d546-9d0c-474d-961e-ab185fc182a4",
    category: "office",
  },
  {
    title: "Mug 2",
    size: "Large",
    price: 2700,
    stock: 24,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/5.jpg?alt=media&token=0f3b5832-792c-4cdc-9f53-8e063b5ed818",
    category: "office",
  },
  {
    title: "Mug 3",
    size: "Medium",
    price: 1700,
    stock: 15,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/6.jpg?alt=media&token=46518eb7-ac23-4436-820b-5e70f57e8932",
    category: "office",
  },
  {
    title: "Cap 1",
    size: "Small",
    price: 1800,
    stock: 15,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/7.jpg?alt=media&token=44359a2c-ae89-4a27-aad2-cb8272cb7697",
    category: "apparel",
  },
  {
    title: "Cap 2",
    size: "Large",
    price: 2800,
    stock: 12,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/8.jpg?alt=media&token=10162151-9d23-4e92-af24-2c3703b9899c",
    category: "apparel",
  },
  {
    title: "Cap 3",
    size: "Small",
    price: 1600,
    stock: 17,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/9.jpg?alt=media&token=a8f0a626-cde0-4af9-9d99-079a064c1ee4",
    category: "apparel",
  },
  {
    title: "Pen 1",
    size: "Large",
    price: 2500,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/10.jpg?alt=media&token=2706a2e4-f244-4ab4-9e9b-e1883b5f7195",
    category: "office",
  },
  {
    title: "Pen 2",
    size: "Medium",
    price: 15,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/11.jpg?alt=media&token=b39223a4-1f0c-4285-870d-13f9b03215af",
    category: "office",
  },
  {
    title: "Pen 3",
    size: "Medium",
    price: 1900,
    stock: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/mi-ecommerce-f6a74.appspot.com/o/12.jpg?alt=media&token=fc8635fb-54be-4f47-b3b7-81b215fed41d",
    category: "office",
  },
];

// Cualquier funcion que trabaje con una bdd debe ser asincronica

export const createProducts = async () => {
  prods.forEach(async (prod) => {
    await addDoc(collection(bdd, "productos"), {
      title: prod.title,
      size: prod.size,
      price: prod.price,
      stock: prod.stock,
      category: prod.category,
      img: prod.img,
    });
  });
};

// Consultar productos
export const getProducts = async () => {
  const productos = await getDocs(collection(bdd, "productos"));
  const items = productos.docs.map((prod) => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};

//Consultar Producto
export const getProduct = async (id) => {
  const producto = await getDoc(doc(bdd, "productos", id));
  const item = { ...producto.data(), id: producto.id };
  return item;
};

// Actualizar Producto

export const updateProduct = async (id, info) => {
  await updateDoc(doc(bdd, "productos", id), info);
};

// Eliminar producto

export const deleteProduct = async (id) => {
  await deleteDoc(doc(bdd, "productos", id));
};

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (
  cliente,
  precioTotal,
  carrito,
  fecha
) => {
  const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
    cliente: cliente,
    items: carrito,
    precioTotal: precioTotal,
    fecha: fecha,
  });
  return ordenCompra;
};

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id));
  const item = { ...ordenCompra.data(), id: ordenCompra.id };
  return item;
};
