import { useQuery } from "@tanstack/react-query";
import { CreateRoomProps, createRoom } from "../requests/createRoom";

export const useCreateRoom = (option: CreateRoomProps) =>
  useQuery({
    queryKey: ["CreateRoom", option],
    queryFn: () => createRoom(option),
  });
