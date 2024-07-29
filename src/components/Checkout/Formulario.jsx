const Formulario = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    return (
      <div>
        <h2>Para concretar su compra, por favor, rellenar el formulario.</h2>
        <form className="form-checkout" onSubmit={enviarOrden}>
          <label>Nombre</label>
          <input type="text" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />
  
          <label>Telefono</label>
          <input
            type="text"
            name="telefono"
            value={datosForm.telefono}
            onChange={guardarDatosInput}
          />
  
          <label>Email</label>
          <input type="text" name="email" value={datosForm.email} onChange={guardarDatosInput} />

          <label>Repetir Email</label>
          <input type="text" name="email" value={datosForm.email} onChange={guardarDatosInput} />
  
          <button className="send-order" type="submit">Enviar orden</button>
        </form>
      </div>
    );
  };
  export default Formulario;