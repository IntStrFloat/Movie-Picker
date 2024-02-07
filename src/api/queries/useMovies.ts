import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../requests/getMovies";

export const useMovies = (roomId: string) =>
  useQuery({
    queryKey: ["getMovies", roomId],
    queryFn: () => getMovies(roomId),
  });
