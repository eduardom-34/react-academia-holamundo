import { useEffect, useState } from "react"


interface User {
  id: string
  name: string
}


export const App = () => {


  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    setLoading(true);

    fetch(url)
      .then((response) => {
        return response.json() as Promise<User[]>;
      })
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
    
  }, []);


  if(loading) {
    return <p>Cargando....</p>
  }

  return (
    <ul>
      {user.map(u => <li key={u.id}>{ u.name }</li>)}
    </ul>
  )
}
