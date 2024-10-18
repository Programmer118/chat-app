import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messageContainer/MessageContainer'

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='flex h-screen w-full '>
      {/* Mobile sidebar */}
      <div className={`fixed shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 inset-y-0 left-0 z-30 w-64 transition duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main content */}
      <div className='flex flex-col flex-1 w-full lg:pl-64'>
        {/* Mobile header */}
        <header className='flex items-center justify-between p-4  border-b lg:hidden'>
          <button onClick={toggleSidebar} className='text-gray-500 focus:outline-none focus:text-gray-700'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </header>

        {/* Message container */}
        <div onClick={() => setIsSidebarOpen(false)} className='flex-1 overflow-hidden '>
          <MessageContainer />
        </div>
      </div>
    </div>
  )
}

export default Home
