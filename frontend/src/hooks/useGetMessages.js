import { useEffect, useState } from "react";
import useConversation from "../store/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessageURL = `api/message/${selectedConversation?.id}`;

  useEffect(() => {
    //Clear messages when the conversation changes
    setMessages([]);

    const getMessages = async () => {
      setLoading(true);

      try {
        const res = await fetch(sendMessageURL, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        // Update the message state after fetching
        setMessages([...data]); 
      } catch (error) {
       
      } finally {
        setLoading(false);
      }
    };

    // Call the function if there's a valid conversation ID
    if (selectedConversation?.id) getMessages();

    // Dependencies: trigger this effect when selectedConversation.id changes
  }, [selectedConversation?.id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
