import React from "react";

const SearchBar = () => {
  return (
    <>
      <form className=" flex items-center gap-2 text-white">
        <input type="text" className="input input-bordered rounded-full bg-transparent" placeholder="Search...." />
        <button type="submit" className="btn btn-circle bg-sky-400 bg-transparent border-none text-gray-800 hover:bg-sky-300">
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
    </>
  );
};

export default SearchBar;

// STARTER CODE

// const SearchBar = () => {
//   return (
//     <>
//       <form className=" flex items-center gap-2 text-white">
//         <input type="text" className="input input-bordered rounded-full bg-transparent" placeholder="Search...." />
//         <button type="submit" className="btn btn-circle bg-sky-400 bg-transparent border-none text-gray-800 hover:bg-sky-300">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 16 16"
//           fill="currentColor"
//           className="h-5 w-5 opacity-70"
//         >
//           <path
//             fillRule="evenodd"
//             d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//             clipRule="evenodd"
//           />
//         </svg>
//         </button>
//       </form>
//     </>
//   );
// };

// export default SearchBar;
