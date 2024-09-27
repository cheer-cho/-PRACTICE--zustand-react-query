// Server state calls API
import { User } from '@/types/user';

export type GetUsersFilters = {
  limit: number;
  page: number;
};

export async function getUsers(filters?: GetUsersFilters) {
  // Do something cool with the filters

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { id: 1, name: 'Cheer' },
    { id: 2, name: 'Cheer 1' },
    { id: 3, name: 'Cheer 2' },
  ] as User[];
}
