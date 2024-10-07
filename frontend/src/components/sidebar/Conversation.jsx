import useConversation from "../../store/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Conversation = ({ user, lastIdx }) => {
  const { selectedConversation, setSelectedConversation, messages } = useConversation();
  const { authUser } = useAuthContext();
  const isSelected = selectedConversation?.id === user.id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user.id);

  // const [isViewed, setIsViewed] = useState(true); // State to track if the conversation is viewed ** update in future
  const [lastMessage, setLastMessage] = useState({
    message: '',
    senderID: ''
  });

  useEffect(() => {
    // Find the last message in the conversation with this user
    const lastmsg = messages
      .filter((msg) => msg.senderID === user.id || msg.receiverID === user.id) // Filter messages involving the user
      .slice(-1)[0]; // Get the last message
  
    if (lastmsg) {
      setLastMessage({
        message: lastmsg.message,
        senderID: lastmsg.senderID
      }); // Assuming the message text is in `message` field
    }

    // If the conversation is selected, mark it as viewed
    if (isSelected) {
      // setIsViewed(true); // Mark as viewed when the user opens the conversation update in future
    }

  }, [messages, user.id, isSelected]);

  const handleClick = () => {
    setSelectedConversation(user); // Select the conversation when clicked
    // setIsViewed(true); // Mark the conversation as viewed when clicked
  }

  return (
    <>
      <div
        className={`flex gap-2 items-center ${
          isSelected ? "bg-sky-400" : ""
        } hover:bg-sky-400 py-1 p-2 my-3 cursor-pointer rounded-full`}
        onClick={handleClick}
      >
        <div className={`${isOnline ? "online" : ""} avatar`}>
          <div className="w-10 rounded-full">
            <img
              src={user.profilePic}
              alt="User Profile"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between items-center">
            <p className="font-bold text-gray-200 ">{user.name}</p>

            {/* Display last message */}
            <span className="text-[15px] text-emerald-700 font-semibold">
              {/* Red dot indicator for unread messages */}
              {/* {!isViewed && <span className="text-red-500">●</span>} update in future */}

              {lastMessage.senderID === authUser.user.id ? (
                <span className="text-gray-700">You: {lastMessage.message}</span> // Show 'You:' for messages from the logged-in user
              ) : (
                <>{lastMessage.message}</>
              )}
            </span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
