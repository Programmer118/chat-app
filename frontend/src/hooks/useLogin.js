import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin =()=>{
    const [Loading, setLoading] = useState(false)
    const loginURL ="api/auth/login"

    const {setauthUser} = useAuthContext()

    const login = async({username,password})=>{
        const success = handleLoginError({username,password})

        if(!success) return false
        setLoading(true)

        try {
            const res = await fetch(loginURL,{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username,
                    password,
                })
            })
            const data = await res.json()

            if(data.error){
                throw new Error(data.error)
            }

            //set localstorage
            localStorage.setItem("user-info",JSON.stringify(data))

            setauthUser(data)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {Loading, login}
}

export default useLogin

function handleLoginError({username,password}){

    if(!username && !password ){
        toast.error("Please fill all the fields")
        return false
    }

    if(!username){
        toast.error("Please fill username")
        return false
    }
    if(!password){
        toast.error("Please fill password")
        return false
    }

    if(password.length < 6){
        toast.error("Password should be atleast 6 characters")
        return false
    }

    return true

}