import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetUsers =()=>{
    const [Loading, setLoading] = useState(false)
    const [Users, setUsers] = useState([])

    useEffect(() => {
        const gatUsers = async()=>{
            setLoading(true)
            try {
                const res = await fetch('/api/users')
                const data = await res.json()
                if(!data){
                    throw new Error(data.error)
                }

                setUsers(data.data)

            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
        gatUsers()
    }, [])

    return {Loading,Users}
}

export default useGetUsers
