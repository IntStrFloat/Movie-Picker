import { Users } from "@/types/User";
import { api } from "../instance";
interface JoinRoomProps {
  roomId: string;
  userName: string;
}
export const joinRoom = async ({ roomId, userName }: JoinRoomProps) =>
  (await api.get<Users>(`/joinRoom?userName=${userName}&roomId=${roomId}`))
    .data;
