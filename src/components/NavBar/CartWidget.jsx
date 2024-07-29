//Vinculos
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

//Icono del carrito
import { FaCartArrowDown } from "react-icons/fa";

const CartWidget = () => {

  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <Link to="/carrito" className="cartwidget">
      <FaCartArrowDown size={25} color='rgb(0, 0, 120)' />
      <p>{ cantidad > 0 && cantidad }</p>
    </Link>
  )
}
export default CartWidget


