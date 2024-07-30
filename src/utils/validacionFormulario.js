//Libreria
import { string, object, mixed } from "yup";

let userSchema = object({
  nombre: string().required("Por favor, rellenar el campo nombre"),
  telefono: mixed().required("Por favor, indicar un telefono de contacto"),
  email: string()
    .email("El campo email no tiene el formato correcto")
    .required("Por favor, indicar correo de contacto"),
  email2: string()
    .email("El campo email no tiene el formato correcto")
    .required("Por favor, repetir correo de contacto"),
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
