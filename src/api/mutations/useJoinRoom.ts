import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinRoom } from "../requests/joinRoom";

export const useJoinRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (file: { roomId: string; userName: string }) => joinRoom(file),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({ queryKey: ["FetchMembers"] });
      }
    },
  });
};
