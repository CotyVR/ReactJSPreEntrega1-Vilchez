//Vinculos
import {obtenerOpciones} from "../../data/data.js";
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { CircleLoader } from "react-spinners"

//Estética
import "./ItemListContainer.css";


const ItemListContainer = ({}) =>{
    //Icono "Cargando página"
    const [cargando, setCargando] = useState(false)

    const [opc, setOpc] = useState ([]);
    const { idCategory } = useParams()

    useEffect(() => {
      //"Cargando página" --> Mostrar pantalla de carga
      setCargando(true)

      //Datos
        obtenerOpciones()
          .then((respuesta) => {
            if(idCategory){
              const opcFiltrados = respuesta.filter((opc) => opc.categoria === idCategory )
              setOpc(opcFiltrados)
            }else{
              setOpc(respuesta);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            //Ocultar pantalla de carga
            setCargando (false)
          });
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