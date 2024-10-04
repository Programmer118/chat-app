import React, { useEffect, useRef } from "react";
import Message from './Message'
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenSocketMessage from "../../hooks/useListenSocketMessage";

const Messages = () => {
  const {Loading,messages} = useGetMessages();
  useListenSocketMessage()
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({behavior:"auto"})
  }, [messages])
  return (
   <div className="scroll-container px-4 flex-1 overflow-auto">

    {!Loading && messages.length >0 && messages.map((message,idx)=>(
      <div key={message.id} ref={lastMessageRef}>
        <Message message={message}/>
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
