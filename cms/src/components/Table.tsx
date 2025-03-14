
interface User {
  name: string
  lastname: string
  email: string
  tipo: string
}


interface Props {
  users: User[],
}


export const Table = (props: Props) => {

  const { users } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Tipo</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user, index) => (
            <tr key={index} 
              className= { index % 2 === 0 ? "table": "table-secondary"  }
              
              >
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.tipo}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
