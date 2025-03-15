// import { useEffect, useState } from "react"
import useUsers from "./hooks/useUsers"

export const App = () => {

  const {loading, error, users } = useUsers();


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
