import React from "react";
import {useAuthContext} from '../../context/AuthContext'
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation,setSelectedConversation} = useConversation();

  const fromMe = authUser.user.id === message.senderID;
  const profilePic = fromMe ? authUser.user.profilePic: selectedConversation.profilePic
  const shake = message.shouldShake ? "shake" : ''

  return (
    <div className={`chat ${fromMe ? "chat-end" :"chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt=""
            src={profilePic}
          />
        </div>
      </div>
       
      <div className={`chat-bubble text-white ${fromMe ? "bg-blue-500" :"bg-gray-700"} ${shake}`}>
       {message.message}
      </div>
      
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {extractTime(message.timestamp)}
      </div>
    </div>
  );
};

export default Message;
