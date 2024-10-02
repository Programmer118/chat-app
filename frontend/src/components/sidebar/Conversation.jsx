import React, { useState } from "react";

const Conversation = () => {
  const [isOnline, setisOnline] = useState(true);
  return (
    <div className="">
      <div className="flex gap-2 items-center hover:bg-sky-400 py-1 p-2 my-3 cursor-pointer rounded-full">
        <div className={`${isOnline?'online':"offline"} avatar`}>
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>   
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200 ">Jone jane</p>
                <span className="text-xl">😴</span>
            </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"/>
    </div>
  );
};

export default Conversation;

//STARTER CODE

// const Conversation = () => {
//   const [isOnline, setisOnline] = useState(true);
//   return (
//     <div className="">
//       <div className="flex gap-2 items-center hover:bg-sky-400 py-1 p-2 my-3 cursor-pointer rounded-full">
//         <div className={`${isOnline?'online':"offline"} avatar`}>
//           <div className="w-10 rounded-full">
//             <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//           </div>   
//         </div>
//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className="font-bold text-gray-200 ">Jone jane</p>
//                 <span className="text-xl">😴</span>
//             </div>
//         </div>
//       </div>
//       <div className="divider my-0 py-0 h-1"/>
//     </div>
//   );
// };

// export default Conversation;
