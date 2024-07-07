import "./ItemDetail.css";

const ItemDetail = ({ opc }) => {

  return (
    <div className="item-detail">
      <img src={opc.imagen} alt="" />
      <div className="detail">
        <h2>{opc.nombre}</h2>
        <p>{opc.descripcion}</p>
        <p>Precio: ${opc.precio}</p>
      </div>
    </div>
  );
};
export default ItemDetail;