import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../store/useConversation"
import { useAuthContext } from "../context/AuthContext"
import notifySound from '../assets/notify.wav'

const useListenSocketMessage = () => {
    const {socket} = useSocketContext()
    const {messages,setMessages} = useConversation()
    const {authUser} = useAuthContext()
    useEffect(() => {
        socket?.on("newMessage",(newMessage)=>{

            if(newMessage.receiverID === authUser.user.id){
                const sound = new Audio(notifySound)
                sound.play()
                newMessage.shouldShake = true;
                setMessages([...messages,newMessage]);
            }
        })
        return ()=>socket?.off("newMessage");

    }, [socket,messages,setMessages])
}

export default useListenSocketMessage
