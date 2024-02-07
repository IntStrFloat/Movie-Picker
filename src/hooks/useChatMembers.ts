import { fetchMember } from "@/api/requests/fetchMembers";
import { Users } from "@/types/User";

import { useEffect, useState } from "react";

// interface ChatMemberProps {
//   roomId: number;
// }
export const useChatMembers = (roomId: string) => {
  const [members, setMembers] = useState<Users>();

  const memberHandle = async () => {
    const data = await fetchMember(roomId);
    setMembers(data);
  };

  useEffect(() => {
    memberHandle();
    const interval = setInterval(() => {
      memberHandle();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return members;
  //   return (
  //     <div>
  //       <h2>List of Members:</h2>
  //       <ul>
  //         {members &&
  //           members.map((member) => (
  //             <li key={member.userName}>{member.userName}</li>
  //           ))}
  //       </ul>
  //     </div>
  //   );
};
