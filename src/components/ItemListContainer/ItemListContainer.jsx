//Vinculos
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { CircleLoader } from "react-spinners"
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";

//Estética
import "./ItemListContainer.css";


const ItemListContainer = ({}) =>{
    //Icono "Cargando página"
  const [cargando, setCargando] = useState(false)
  const [opc, setOpc] = useState ([]);
  const { idCategory } = useParams()
  const obtenerProductos = () => {
    const productosRef = collection(db, "productos")
    getDocs(productosRef).then((respuesta) => {
        const data = respuesta.docs.map((productDb) =>{
          return { id: productDb.id, ...productDb.data() }
        });

        setOpc (data)

      })
  }

  const obtenerProductosFiltrados = () => {
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where( "categoria", "==", idCategory ))
    getDocs(q).then((respuesta) => {
      const data = respuesta.docs.map((productDb) =>{
        return { id: productDb.id, ...productDb.data() }
      })
  
    setOpc (data)
  
    })
  }

  useEffect(() => {
    if(idCategory){
      obtenerProductosFiltrados()
    }else{
      obtenerProductos();
    }
  }, [idCategory]);

  return(
    <div className="ItemListContainer">
    {/* Cargando pagina */}
      {
        cargando ? 
        <div 
          style = {{ 
            widht : "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }} >
        <CircleLoader color="blue" size={75} />
        </div> 
          : <ItemList opc = {opc} />
      }
    </div>
  );
};

export default ItemListContainer;