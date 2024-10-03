import React, { useEffect, useRef } from "react";
import Message from './Message'
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const {Loading,messages} = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({behavior:"auto"})
  }, [messages])
  return (
   <div className="scroll-container px-4 flex-1 overflow-auto">

    {!Loading && messages.length >0 && messages.map((message,idx)=>(
      <div ref={lastMessageRef}>
        <Message key={message.id} message={message}/>
      </div>
    ))}

    {Loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}
    {!Loading && messages.length === 0 &&
      <p className='text-center'>Send a message to start the conversation</p>
    }
   </div>
  );
};

export default Messages;
