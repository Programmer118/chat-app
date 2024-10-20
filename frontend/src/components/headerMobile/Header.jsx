import React from 'react'

const Header = ({isSidebarOpen,setIsSidebarOpen}) => {
  return (
    <header className={`flex items-center justify-between p-4 lg:hidden absolute top-0 left-0 z-50 transition duration-300 transform ${isSidebarOpen ? "translate-x-60" : ""}`}>
    <button
      onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
      className="text-gray-500 focus:outline-none focus:text-gray-700 relative w-6 h-6"
    >
      <svg
        className={`w-6 h-6 absolute transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-0" : "opacity-100"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        className={`w-6 h-6 absolute transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </header>
  )
}

export default Header