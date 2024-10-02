import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messageContainer/MessageContainer'


const Home = () => {
  return (
    <div className='flex justify-between items-center h-full sm:h-[450px] md:h-[550px]  rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
