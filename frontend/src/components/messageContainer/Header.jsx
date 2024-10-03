import React from "react";

const Header = ({user}) => {
  return (
    <div className="bg-slate-500 px-4 py-2 mb-2 ">
      <span className="label-text"> To: </span>{" "}
      <span className="text-gray-900 font-bold capitalize">{user.name}</span>
      <div className=" text-sm">
      <span className="label-text"> Username: </span>{" "}
      <span className="text-gray-900 font-thin">{user.username}</span>
      </div>
    </div>
  );
};

export default Header;
