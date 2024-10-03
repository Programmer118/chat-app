import React, { useState } from "react";
import useConversation from "../../store/useConversation";

const Conversation = ({ user, lastIdx }) => {
  const [isOnline, setisOnline] = useState(true);

  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === user.id;

  return (
    <div className="">
      <div
        className={`flex gap-2 items-center ${
          isSelected ? "bg-sky-400" : ""
        } hover:bg-sky-400 py-1 p-2 my-3 cursor-pointer rounded-full`}

        onClick={()=>setSelectedConversation(user)}
      >
        <div className={`${isOnline ? "online" : "offline"} avatar`}>
          <div className="w-10 rounded-full">
            <img
              src={user.profilePic}
              alt="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 ">{user.name}</p>
            {/* <span className="text-xl">😴</span> //future update */}
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </div>
  );
};

export default Conversation;
