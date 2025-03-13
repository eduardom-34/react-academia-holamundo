
export const Form = () => {
  return (
    <form className="mb-3">

      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="name" />
      </div>

      <div className="mb-3">
        <label htmlFor="inputLastname" className="form-label">Apellido</label>
        <input type="text" className="form-control" id="lastname" />
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Correo</label>
        <input type="email" className="form-control" id="email" />
      </div>

      <div className="mb-3">
        <label htmlFor="disabledSelect" className="form-label"> Tipo </label>
        <select id="disabledSelect" className="form-select">
          <option>-- Selecciona tipo --</option>
          <option>Familiar</option>
          <option>Trabajo</option>
          <option>Amigo</option>
          <option>Otros</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary me-2">Enviar</button>
      <button className="btn btn-secondary ">Limpiar</button>
    </form>
  )
}
