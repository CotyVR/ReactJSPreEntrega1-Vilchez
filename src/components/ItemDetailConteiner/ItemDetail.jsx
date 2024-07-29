//Vinculos
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";

//Estetica
import "./ItemDetail.css";

const ItemDetail = ({ opc }) => {
  const { agregarProducto } = useContext(CartContext);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {
      ...opc,
      cantidad: contador,
    };

    agregarProducto(productoCarrito);
  };

  return (
    <div className="item-detail">
      <img src={opc.imagen} alt="" />
      <div className="detail">
        <h2>{opc.nombre}</h2>
        <p>{opc.descripcion}</p>
        <p>Precio: ${opc.precio}</p>
        <ItemCount agregarAlCarrito={agregarAlCarrito} stock={opc.stock} />
      </div>
    </div>
  );
};
export default ItemDetail;