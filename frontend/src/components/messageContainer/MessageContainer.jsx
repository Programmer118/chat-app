import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import Header from "./Header";
import {TiMessages} from 'react-icons/ti'
import useConversation from "../../store/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
  //cleanup function (unmounts)
  return ()=>{
    setSelectedConversation(null)
  }
  }, [setSelectedConversation])

  return (
    <div className="md:min-w-[400px] lg:w-[600px] flex flex-col h-[100%] justify-between shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
     {
      !selectedConversation ? <NoChatSelected/>:(
        <>
        <Header user={selectedConversation}/>
        <Messages />
        <MessageInput />
      </>
      )
     }
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2"
      >
        <p>Welcome John Doe *</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  );
};
