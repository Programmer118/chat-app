import React from 'react'
import SearchBar from './SearchBar'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = ({setIsSidebarOpen}) => {
  return (
    <div className='h-full  border-r border-slate-500 p-4 flex flex-col'>
      <SearchBar setIsSidebarOpen={setIsSidebarOpen}/>
      <div className="divider px-3"></div>
      <Conversations setIsSidebarOpen={setIsSidebarOpen}/>

      <LogoutButton/>
    </div>
  )
}

export default Sidebar
