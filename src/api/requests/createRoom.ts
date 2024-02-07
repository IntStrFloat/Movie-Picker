import { CreateRoomRequestProps } from "@/types/User";
import { api } from "../instance";

export interface CreateRoomProps {
  userName: string;
}

export const createRoom = async (
  options: CreateRoomProps
): Promise<CreateRoomRequestProps> =>
  (
    await api.get<CreateRoomRequestProps>(
      `/createRoom?userName=${options.userName}`
    )
  ).data;
