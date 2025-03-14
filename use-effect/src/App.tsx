import { useEffect, useState } from "react"


interface User {
  id: string
  name: string
}


export const App = () => {


  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {

    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        return response.json() as Promise<User[]>;
      })
      .then((data) => setUser(data));
    
  }, []);

  return (
    <ul>
      {user.map(u => <li key={u.id}>{ u.name }</li>)}
    </ul>
  )
}
