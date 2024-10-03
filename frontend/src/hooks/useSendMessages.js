import { useState } from "react";
import toast from "react-hot-toast"

import useConversation from "../store/useConversation";

const useSendMessages = () => {
    const [Loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const sendMesageURL = `api/message/send/${selectedConversation.id}`

    const sendMessage = async({message}) =>{
        if(message===''){
            return
        }
        setLoading(true)

        try {
            const res = await fetch(sendMesageURL,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    message
                })
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            setMessages([...messages,data])

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {Loading,sendMessage}
};

export default useSendMessages;
