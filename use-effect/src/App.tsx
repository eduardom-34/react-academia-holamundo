import useHttpData from "./hooks/useHttpData";


interface User {
  id?: string
  name: string
};


const url: string = "https://jsonplaceholder.typicode.com/users";

export const App = () => {

  const {loading, error, data: users, deleteData: deleteUser,  } = useHttpData<User>(url);


  if(loading) {
    return <p>Cargando....</p>
  }

  if( error && !loading){
    return <p>Ha ocurrido un error {error}</p>
  }

  return (
    <ul>
      <button onClick={() => deleteUser(1)}>Enviar</button>
      {users.map(u => <li key={u.id}>{ u.name }</li>)}
    </ul>
  )
}
