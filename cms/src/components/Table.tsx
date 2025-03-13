
interface User {
  name: string
  lastname: string
  email: string
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
          {/* <th scope="col">Tipo</th> */}
        </tr>
      </thead>
      <tbody>
      {users.map((user, index) => (
            <tr key={index} className="table-secondary">
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
