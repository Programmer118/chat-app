import React, { useEffect, useState } from "react";
import useConversation from "../../store/useConversation";
import useGetUsers from "../../hooks/useGetUsers";
import toast from "react-hot-toast";

const SearchBar = () => {
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
        c.name.toLowerCase().includes(Search.toLowerCase()) ||
        c.username.toLowerCase().includes(Search.toLowerCase())
    );

    setFilteredUsers(filtered);
  }, [Search, Users]);

  // Handle user selection from filtered list
  const handleSubmit = (e, selectedUser) => {
    e.preventDefault();

    if (selectedUser) {
      setSelectedConversation(selectedUser);
      setSearch("");
    } else {
      toast.error("No user found");
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={(e) => handleSubmit(e, null)} // Null for default form submission
        className=" flex items-center gap-2 text-white"
      >
        <input
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="input input-bordered rounded-full bg-transparent"
          placeholder="Search...."
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-400 bg-transparent border-none text-gray-800 hover:bg-sky-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>

      {Search && filteredUsers.length > 0 && (
        <div className="w-[200px] absolute z-[1001] p-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
          {filteredUsers.map((user, idx) => (
            <div
              key={idx}
              onClick={(e) => handleSubmit(e, user)} // Correctly pass user as callback
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
