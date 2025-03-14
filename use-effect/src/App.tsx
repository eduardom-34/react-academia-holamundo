import { useEffect, useState } from "react"


interface User {
  id: string
  name: string
}


export const App = () => {

  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    setLoading(true);

    fetch(url)
      .then((response) => {
        if(!response.ok) throw new Error(`${response.status}`)
        return response.json() as Promise<User[]>;
      })
      .then((data) => setUser(data))
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
    
  }, []);


  if(loading) {
    return <p>Cargando....</p>
  }

  if( error && !loading){
    return <p>Ha ocurrido un error {error}</p>
  }

  return (
    <ul>
      {user.map(u => <li key={u.id}>{ u.name }</li>)}
    </ul>
  )
}
