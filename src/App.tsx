import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api/user';
import { useUserStore } from './state/useStore';
import { useEffect } from 'react';

export default function App() {
  const { users, setUsers } = useUserStore();
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return (
    <div>
      {users?.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}
