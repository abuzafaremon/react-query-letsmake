import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUsers = () => {
  const fetchUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
  }
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 30000,
    refetchOnWindowFocus: true,
  });
};