//Vinculos
import Formulario from "./Formulario";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db.js";
import validateForm from "../../utils/validacionFormulario.js";

//Librerias
import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

//Estetica
import "./Checkout.css";

const Checkout = () => {
  //Para obtener la fecha y hora en que se confirma la compra.
  let now = new Date();

  //Union de todos los datos (formulario + fecha)
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    email2: "",
    fechayhora: now,
  });
  const [idOrden, setIdOrden] = useState(null);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = async (event) => {
    event.preventDefault();
    //formatear correctamente la orden
    const datos = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: precioTotal(),
    };
    //validar formulario antes de subir la orden
    const response = await validateForm(datosForm);
    if (response.status === "success") {
      subirOrden(datos);
    } else {
      toast.warning(response.message);
    }
  };

  const subirOrden = (datos) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, datos)
      .then((respuesta) => {
        setIdOrden(respuesta.id);
      })
      .finally(() => {
        vaciarCarrito();
      });
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div>
          <h2>Su orden ha sido ingresada con éxito</h2>
          <p>Se recomienda guardar el id de su orden, el cual es: {idOrden} </p>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};
export default Checkout;
