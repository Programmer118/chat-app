import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {
  const [message, setMessage] = useState({
    message: "",
  });

  const { Loading, sendMessage } = useSendMessages();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if(!(message.message))return
    await sendMessage(message);
    setMessage({ ...message, message: "" });
  };

  return (
    <form onSubmit={handleSendMessage} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message.message}
          onChange={(e) => setMessage({ ...message, message: e.target.value })}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {!Loading ? (
              <BsSend className="w-4 h-4" />
          ): (
              <span className="loading loading-spinner"></span>
            )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
