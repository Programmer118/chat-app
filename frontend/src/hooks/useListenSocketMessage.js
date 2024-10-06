import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";
import notifySound from '../assets/notify.wav';

const useListenSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  const { selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notifySound);
      sound.play();
      newMessage.shouldShake = true;

      setMessages([...messages, newMessage]);
      if (selectedConversation.id === newMessage.senderID) {
      }
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenSocketMessage;
