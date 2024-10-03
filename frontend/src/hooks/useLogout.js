import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogOut =()=>{
    const [Loading, setLoading] = useState(false)
    const logoutURL ="api/auth/logout"

    const {setauthUser} = useAuthContext()

    const logout = async()=>{
   
        setLoading(true)

        try {
            const res = await fetch(logoutURL,{
                method:'POST',
                headers:{"Content-Type":"application/json"},
            })
            const data = await res.json()

            if(data.error){
                throw new Error(data.error)
            }

            //set localstorage
            localStorage.removeItem("user-info",JSON.stringify(data))

            setauthUser(null)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {Loading, logout}
}

export default useLogOut
