import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUser = (userId) => {
  const fetchUser = ({ queryKey }) => {
    const userId = queryKey[1];
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }
  return useQuery({
    queryKey: ['users', userId],
    queryFn: fetchUser,
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });
};