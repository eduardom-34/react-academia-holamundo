import { useEffect, useState } from "react";

interface User {
  id: string
  name: string
};


export default function useUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function hook() {
      const url = "https://jsonplaceholder.typicode.com/users";

      setLoading(true);


      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`${response.status}`)

        const data: User[] = await response.json()
        setUsers(data);

      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false);
      }

    }

    hook();

  }, []);

  return { users, loading, error }
}