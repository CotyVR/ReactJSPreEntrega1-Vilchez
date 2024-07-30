//Vinculo
import db from "../db/db.js";

//Libreria
import { addDoc, collection } from "firebase/firestore";

const opc = [
  {
    id: "pizza1",
    nombre: "Pizza de pepperoni",
    descripcion:
      "Pizza grande cubierta con nuestra deliciosa salsa clásica, pepperoni y extra queso.",
    stock: 3,
    categoria: "pizza",
    imagen:
      "https://www.saborusa.com/wp-content/uploads/2019/10/Celebremos-con-una-deliciosa-y-tradicional-pizza-de-pepperoni-Foto-destacada.png",
    precio: 5990,
  },

  {
    id: "pizza2",
    nombre: "Pizza de aceitunas con atún",
    descripcion:
      "Pizza grande cubierta con nuestro delicioso queso y acompañadas de aceitunas negras con atún.",
    stock: 2,
    categoria: "pizza",
    imagen:
      "https://marioskitchen.net/wp-content/uploads/2023/07/AnyConv.com__Diseno-sin-titulo-2.webp",
    precio: 7990,
  },

  {
    id: "china1",
    nombre: "Carne mongoliana",
    descripcion:
      "Receta oriental en base a filete de carne de vacuno salteada, cebollín, salsa de soya, arroz blanco.",
    stock: 4,
    categoria: "china",
    imagen: "https://estag.fimagenes.com/imagenesred/10656299.jpg",
    precio: 4990,
  },

  {
    id: "china2",
    nombre: "Arrollado primavera",
    descripcion:
      "Rollo elaborado de una pasta rellena con verduras picadas al estilo juliana. No poseen carne. Apto para vegetarianos.",
    stock: 7,
    categoria: "china",
    imagen:
      "https://th.bing.com/th?id=OIP.1sJuXg4t6yFBaPEO_CMOCgHaFC&w=303&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    precio: 2990,
  },

  {
    id: "hamb1",
    nombre: "Hamburguesa con tocino",
    descripcion:
      "Deliciosa hamburguesa acompañada con tocino, queso y pepinillo.",
    stock: 4,
    categoria: "hamburguesa",
    imagen:
      "https://img.freepik.com/fotos-premium/hamburguesa-doble-tocino-mucho-queso-cheddar_937837-80.jpg",
    precio: 8990,
  },

  {
    id: "hamb2",
    nombre: "Hamburguesa vegana",
    descripcion:
      "Hamburguesa a base de cereal y lenteja, con un rico alor y sabor a curry.",
    stock: 2,
    categoria: "hamburguesa",
    imagen:
      "https://deliciaskitchen.b-cdn.net/wp-content/uploads/2021/05/hamburguesa-de-lentejas.jpg",
    precio: 9990,
  },
];

const seedProducts = () => {
  opc.map(({ id, ...rest }) => {
    //El "productos" dentro del parentesis de "collection" hace referencia al nombre indicado en el Firebase
    const productosRef = collection(db, "productos");
    addDoc(productosRef, rest);
  });
  return;
};

seedProducts();
