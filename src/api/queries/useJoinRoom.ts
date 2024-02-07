import { useQuery } from "@tanstack/react-query";
import { joinRoom } from "../requests/joinRoom";
interface JoinRoomProps {
  roomId: string;
  userName: string;
}
export const useJoinRoom = (user: JoinRoomProps) =>
  useQuery({
    queryKey: ["joinRoom", user],
    queryFn: () => joinRoom(user),
  });
