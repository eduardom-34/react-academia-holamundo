import { useState } from "react"
import { Form } from "./components/Form"
import { Table } from "./components/Table"

interface User {
  name: string
  lastname: string
  email: string
}




export const App = () => {

  const [users, setUsers] = useState<User[]>([]);

  const handleAddUser = (newUser: User) => {
    setUsers([ ...users, newUser ]);
  }

  return (
    <div className="container">
      <Form onAddUser={handleAddUser}></Form>
      <Table users={users}></Table>
    </div>
  )
}
