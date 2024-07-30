//Vinculos
import ItemDetail from "./ItemDetail";
import db from "../../db/db.js";

//Libreria
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { CircleLoader } from "react-spinners";

const ItemDetailContainer = () => {
  //Icono "Cargando página"
  const [cargando, setCargando] = useState(false);

  const [opc, setOpc] = useState({});
  const { idOpc } = useParams();

  const obtenerProducto = () => {
    const docRef = doc(db, "productos", idOpc);
    getDoc(docRef).then((respuesta) => {
      const data = { id: respuesta.id, ...respuesta.data() };
      setOpc(data);
      //Indica que, una vez obtenido los datos, deje de mostrarse el icono de carga.
      setCargando(false);
    });
  };

  useEffect(() => {
    //Muestra el icono de la pagina cargando
    setCargando(true);

    //Datos
    obtenerProducto();
  }, []);

  return (
    <div className="ItemDetailContainer">
      {cargando ? (
        <div
          style={{
            widht: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircleLoader color="blue" size={75} />
        </div>
      ) : (
        <ItemDetail opc={opc} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
