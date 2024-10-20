import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messageContainer/MessageContainer'
import Header from '../../components/headerMobile/header'


const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen w-full p-8 '>
      {/* Mobile sidebar */}
      <div className={`fixed h-auto shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 inset-y-0 left-0 z-30 w-64 transition duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main content */}
      <div className='flex flex-col flex-1 w-full lg:pl-64 '>
        {/* Mobile header */}
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Message container */}
        <div onClick={() => setIsSidebarOpen(false)} className='flex-1 overflow-hidden '>
          <MessageContainer />
        </div>
      </div>
    </div>
  )
}

export default Home
