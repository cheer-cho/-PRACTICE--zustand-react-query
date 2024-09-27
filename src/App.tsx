import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api/user';
import { useUserStore } from './state/useUserStore';

export default function App() {
  // Zustand handles client-side state
  const { filters } = useUserStore();

  // react-query handles server-side state
  const { data } = useQuery({
    queryKey: ['users, filters'],
    queryFn: () => getUsers(filters),
  });

  return (
    <div>
      <FilterComponent />
      {data?.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

function FilterComponent() {
  const { setFilters } = useUserStore();

  // Imagine some form inputs here (filter form)
  // and set the filter
  return null;
}
