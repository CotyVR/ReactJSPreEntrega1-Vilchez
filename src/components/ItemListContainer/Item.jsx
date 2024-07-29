import { Link } from "react-router-dom";

const Item = ({ opc }) => {
  return (
    <div className="item">
      <img src={opc.imagen} alt="" />
      <div className="description-item">
        <p>{opc.nombre}</p>
        <p>Precio: ${opc.precio}</p>

        <Link to = {"/detail/" + opc.id } className="btnWeb" >Ver detalles</Link>
      </div>
    </div>
  );
};
export default Item;