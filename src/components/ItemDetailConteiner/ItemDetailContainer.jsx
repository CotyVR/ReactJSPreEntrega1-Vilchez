import { useState, useEffect } from "react"
import {obtenerOpciones} from "../../data/data.js"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { CircleLoader } from "react-spinners"

const ItemDetailContainer = () => {
    //Icono "Cargando página"
    const [cargando, setCargando] = useState(false)

    const [opc, setOpc] = useState ({})
    const { idOpc } = useParams()

    useEffect(() => {
        //"Cargando página" --> Mostrar pantalla de carga
        setCargando(true)

        //Datos
        obtenerOpciones()
        .then((data)=> {
            const opcFiltrado = data.find((opcData) => opcData.id === idOpc)
            setOpc(opcFiltrado)
        })


        .finally(() => {
            //Ocultar pantalla de carga
            setCargando (false)
        });

    }, [])

    return(
        <div className="ItemDetailContainer">
            { 
                cargando ? 
                    <div
                        style = {{
                            widht : "100%",
                            height: "90vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", 
                        }}>
                        <CircleLoader color="blue" size = {75} />
                    </div> 
                : <ItemDetail opc={opc} />
            }
        </div>
    )
}

export default ItemDetailContainer
