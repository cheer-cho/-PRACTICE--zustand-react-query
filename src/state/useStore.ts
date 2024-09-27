import { GetUsersFilters } from '@/api/user';
import { User } from '@/types/user';
import { create } from 'zustand';

type UserStore = {
  users: User[];
  setUsers: (users: User[]) => void;
  filters?: GetUsersFilters;
  setFilters: (filters?: GetUsersFilters) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  filters: undefined,
  setFilters: (filters) => set({ filters }),
}));
