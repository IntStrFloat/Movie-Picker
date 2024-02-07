import { Movies } from "@/types/User";
import { api } from "../instance";

interface likeFilmProps {
  roomId: string;
  movieId: string;
}
export const likeFilm = async ({ roomId, movieId }: likeFilmProps) =>
  (await api.get<Movies[]>(`/rateMovie?movieId=${movieId}&roomId=${roomId}`))
    .data;
