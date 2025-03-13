import { useForm } from "react-hook-form";
import { userForm, userSchema } from "../schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onAddUser: (user: userForm) => void;
}


export const Form = ({ onAddUser}: Props) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema)
  });

  const onSubmit = ( data: userForm ) => {
    onAddUser(data);
    reset();
  }

  return (
    <form 
      onSubmit={ handleSubmit(onSubmit) }
      className="mb-3"
    >

      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Nombre</label>
        <input {...register('name')}
          type="text" 
          className="form-control" 
          id="name"
        />
        {errors.name?.message ?? <p>{ errors?.name?.message }</p> }
      </div>

      <div className="mb-3">
        <label htmlFor="inputLastname" className="form-label">Apellido</label>
        <input {...register('lastname')}
          type="text" 
          className="form-control" 
          id="lastname" />
          {errors.lastname?.message ?? <p>{ errors?.lastname?.message }</p> }
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Correo</label>
        <input {...register('email')}
          type="email" 
          className="form-control" 
          id="email" />
          {errors.email?.message ?? <p>{ errors?.email?.message }</p> }
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
      <button className="btn btn-secondary" onClick={ () => reset() }>Limpiar</button>
    </form>
  )
}
