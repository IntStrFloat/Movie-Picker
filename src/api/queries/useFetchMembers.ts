import { useQuery } from "@tanstack/react-query";
import { fetchMember } from "../requests/fetchMembers";

export const useFetchMembers = (roomId: string) =>
  useQuery({
    queryKey: ["FetchMembers", roomId],
    queryFn: () => fetchMember(roomId),
  });
