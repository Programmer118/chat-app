import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useSignUp =()=>{
    const [Loading, setLoading] = useState(false)
    const signUpURL ="api/auth/signup"

    const {setauthUser} = useAuthContext()

    const signup = async({name,username,password,confirmPassword})=>{
        const success = handleSignUpError({name,username,password,confirmPassword})

        if(!success) return false
        setLoading(true)

        try {
            const res = await fetch(signUpURL,{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    name,
                    username,
                    password,
                    confirmPassword
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

    return {Loading, signup}
}

export default useSignUp

function handleSignUpError({name,username,password,confirmPassword}){

    if(!name && !username && !password && !confirmPassword){
        toast.error("Please fill all the fields")
        return false
    }

    if(!name){
        toast.error("Please fill name")
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
    if(!confirmPassword){
        toast.error("Please fill Confirm Password")
        return false
    }

    if(password !== confirmPassword){
        toast.error("Password does not matched")
        return false
    }

    if(password.length < 6){
        toast.error("Password should be atleast 6 characters")
        return false
    }

    return true

}