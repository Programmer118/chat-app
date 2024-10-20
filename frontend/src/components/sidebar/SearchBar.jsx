import React, { useEffect, useState } from "react";
import useConversation from "../../store/useConversation";
import useGetUsers from "../../hooks/useGetUsers";
import toast from "react-hot-toast";

const SearchBar = ({setIsSidebarOpen}) => {
  const [Search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { setSelectedConversation } = useConversation();
  const { Users } = useGetUsers(); // Assuming Users is populated

  // Effect to filter users based on search
  useEffect(() => {
    if (!Search) {
      setFilteredUsers([]);
      return;
    }

    const filtered = Users.filter(
      (c) =>
        c.name.toLowerCase().includes(Search.toLowerCase())
    );

    setFilteredUsers(filtered);
  }, [Search, Users]);

  // Handle user selection from filtered list
  const handleSubmit = (e, selectedUser, setIsSidebarOpen) => {
    e.preventDefault();
    
    if (selectedUser) {
      setSelectedConversation(selectedUser);
      setSearch("");
      setIsSidebarOpen(false);
    } else if (Search.length > 0 && !selectedUser) {
      setSelectedConversation(filteredUsers[0])
      setSearch("");
      setIsSidebarOpen(false);
    }else{
      toast.error("No user found");
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={(e) => handleSubmit(e, null, setIsSidebarOpen)} // Null for default form submission
        className="flex items-center text-white"
      >
        <div className="flex items-center w-full">
          <input
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="w-full py-2 px-4 rounded-full bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:outline-none focus:border-sky-500 transition-colors duration-300 ease-in-out"
            placeholder="Search..."
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
            type="submit"
          >
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>

      {Search && filteredUsers.length > 0 && (
        <div className="w-[200px] absolute z-[1001] p-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
          {filteredUsers.map((user, idx) => (
            <div
              key={idx}
              onClick={(e) => handleSubmit(e, user, setIsSidebarOpen)} // Correctly pass user as callback
              className="user flex justify-start cursor-pointer items-center rounded-lg px-4 py-2 text-black hover:bg-sky-400 font-semibold"
            >
              <img
                className="w-5 h-5 rounded-full mr-4"
                src={user.profilePic || "/default-avatar.png"} // Replace with actual avatar or placeholder
                alt={user.name || "User Avatar"}
              />
              <span>{user.name}</span>
            </div>
          ))}
          <div className="divider my-0 py-0 h-1" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;