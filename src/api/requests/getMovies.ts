import { Movies } from "@/types/User";
import { api } from "../instance";

export const getMovies = async (roomId: string) =>
  (await api.get<Movies[]>(`/getMovies?roomId=${roomId}`)).data;
