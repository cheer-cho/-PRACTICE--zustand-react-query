import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api/user';

export default function App() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });

  return (
    <div>
      {data?.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}
