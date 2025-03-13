import { FormEvent, useRef } from "react";

export const UncontrolledForm = () => {

  const nameRef = useRef<HTMLInputElement>(null);
  const LastnameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const user = {
      nombre: nameRef.current?.value,
      apellido: LastnameRef.current?.value
    };
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input ref={nameRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Apellido</label>
        <input ref={LastnameRef} type="text" id="lastname" className="form-control" />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
    
  );
}
