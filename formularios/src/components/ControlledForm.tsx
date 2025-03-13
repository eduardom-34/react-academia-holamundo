import { FormEvent, useState } from "react";

export const ControlledForm = () => {

  const [user, setUser] = useState({ name: '', lastname: '' });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
          type="text"
          id="name"
          className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Apellido</label>
        <input
          value={user.lastname}
          onChange={e => setUser({ ...user, lastname: e.target.value })}
          type="text"
          id="lastname"
          className="form-control" />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  )
}
