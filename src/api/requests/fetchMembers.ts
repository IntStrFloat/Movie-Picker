import { Users } from "@/types/User";
import { api } from "../instance";

export const fetchMember = async (roomId: string) =>
  (await api.get<Users>(`/getAllParticipants?roomId=${roomId}`)).data;
