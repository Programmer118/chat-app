import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [input, setinput] = useState({
    username: "",
    password: "",
  });

  const { Loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(input);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> Chat App</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col justify-center items-center gap-2"
        >
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={input.username}
              onChange={(e) => setinput({ ...input, username: e.target.value })}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              value={input.password}
              onChange={(e) => setinput({ ...input, password: e.target.value })}
            />
          </label>

          <button disabled={Loading} className="btn btn-outline btn-accent w-full btn-sm mt-2 text-xl">
          {!Loading ? 
              'Login'
            : (
              <span className="loading loading-spinner"></span>
            )}
            </button>
          <span className=" p-2">
            Don't have accout?{" "}
            <Link
              to={"/signup"}
              className="text-sky-500 font-semibold underline hover:text-sky-400"
            >
              {" "}
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE FOR THIS FILE:

// const Login = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen p-4">
//       <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> Chat App</span>
//         </h1>
//         <form action="" method="post" className="mt-8 flex flex-col justify-center items-center gap-2">
//           <label className="input input-bordered flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70"
//             >
//               <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//             </svg>
//             <input
//               type="text"
//               className="grow"
//               placeholder="Username"
//             />
//           </label>

//           <label className="input input-bordered flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <input
//               type="password"
//               className="grow"
//               placeholder="Password"
//             />
//           </label>
//           <button className="btn btn-outline btn-accent w-full btn-sm mt-2 text-xl">Login</button>
//         <span className=" p-2">Don't have accout? <a href="" className="text-sky-500 font-semibold underline hover:text-sky-400"> Sign Up</a></span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
