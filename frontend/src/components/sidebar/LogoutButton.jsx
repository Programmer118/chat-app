import { TbLogout2 } from "react-icons/tb";
import useLogOut from "../../hooks/useLogout";

const LogoutButton = () => {
   const {Loading,logout} = useLogOut();

  return (
    <div  className='mt-auto '>
      {!Loading ? (
        <TbLogout2 onClick={logout} className="w-6 h-6 text-white cursor-pointer"/>
        ):(
          <span className="loading loading-spinner"></span>
        )
      }
    </div>
  )
}

export default LogoutButton
