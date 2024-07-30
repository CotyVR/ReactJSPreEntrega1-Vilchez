//Vinculos
import { CartContext } from "../../context/CartContext";

//Librerias
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";

//Estetica
import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } =
    useContext(CartContext);

  //Early Return, Return temprano

  if (carrito.length === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en su carrito</h2>
        <Link to="/" className="btnWeb">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Productos seleccionados</h2>
      {carrito.map((productoCarrito) => (
        <div className="card-cart" key={productoCarrito.id}>
          <img src={productoCarrito.imagen} width={100} alt="" />
          <p>{productoCarrito.nombre}</p>
          <p>precio c/u: ${productoCarrito.precio}</p>
          <p>cantidad: {productoCarrito.cantidad}</p>
          <p>
            total parcial: {productoCarrito.precio * productoCarrito.cantidad}
          </p>

          <BsFillTrash3Fill
            size={30}
            color="red"
            onClick={() => borrarProductoPorId(productoCarrito.id)}
          />
        </div>
      ))}
      <h3>Total a pagar: {precioTotal()}</h3>
      <button className="delete-cart" onClick={vaciarCarrito}>
        <BsFillTrash3Fill size={45} color="red" />
        <p>Vaciar carrito</p>
      </button>
      <Link className="continue-cart" to="/checkout">
        Continuar con la compra
      </Link>
    </div>
  );
};
export default Carrito;
