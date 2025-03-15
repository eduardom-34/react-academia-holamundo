import useFetchData from "./hooks/useFetchData";


interface User {
  id: string
  name: string
};


const url: string = "https://jsonplaceholder.typicode.com/users";

export const App = () => {

  const {loading, error, data: users } = useFetchData<User>(url);


  if(loading) {
    return <p>Cargando....</p>
  }

  if( error && !loading){
    return <p>Ha ocurrido un error {error}</p>
  }

  return (
    <ul>
      {users.map(u => <li key={u.id}>{ u.name }</li>)}
    </ul>
  )
}
