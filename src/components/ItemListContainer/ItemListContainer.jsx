//Vinculos
import ItemList from "./ItemList";
import db from "../../db/db.js";

//Librerias
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";

//Estética
import "./ItemListContainer.css";

const ItemListContainer = ({}) => {
  //Icono "Cargando página"
  const [cargando, setCargando] = useState(false);

  //Datos
  const [opc, setOpc] = useState([]);
  const { idCategory } = useParams();
  const obtenerProductos = () => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((respuesta) => {
      const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setOpc(data);
      //Permite que, cuando se carguen los datos, el icono de carga finalice.
      setCargando(false);
    });
  };

  const obtenerProductosFiltrados = () => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("categoria", "==", idCategory));
    getDocs(q).then((respuesta) => {
      const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setOpc(data);
      //Permite que, cuando se carguen los datos, el icono de carga finalice.
      setCargando(false);
    });
  };

  useEffect(() => {
    //Muestra la pantalla cargando, mientras se cargan los datos.
    setCargando(true);

    //Datos
    if (idCategory) {
      obtenerProductosFiltrados();
    } else {
      obtenerProductos();
    }
  }, [idCategory]);

  return (
    <div className="ItemListContainer">
      {/* Cargando pagina */}
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
        <ItemList opc={opc} />
      )}
    </div>
  );
};

export default ItemListContainer;
