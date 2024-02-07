import { Movies } from "@/types/User";
import { api } from "../instance";
interface setMoviesProps {
  roomId: string;
  genres: string[];
  years: string[];
}
export const setMovies = async ({ roomId, genres, years }: setMoviesProps) =>
  (
    await api.post<Movies[]>(
      `/setMovies?roomId=${roomId}`,
      {
        genres: genres,
        years: years,
      },
      { headers: { "Content-Type": "text/plain" } }
    )
  ).data;
