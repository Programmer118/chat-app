import React from "react";
import Conversation from "./Conversation";
import useGetUsers from "../../hooks/useGetUsers";

const Conversations = () => {
  const { Loading, Users } = useGetUsers();

  return (
    <div className="py-2 scroll-container  overflow-y-auto flex flex-col">
      {Users.map((user, Idx) => (
        <Conversation
          key={user.id}
          user={user}
          lastIdx={Idx === Users.length - 1}
        />
      ))}

      {Loading ? <span className="loading loading-infinity text-sky-500"></span> : null}
    </div>
  );
};

export default Conversations;