import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-2 scroll-container  overflow-y-auto flex flex-col'>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}

export default Conversations

// STARTER CODE

// const Conversations = () => {
//   return (
//     <div className='py-2 overflow-auto flex flex-col'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//     </div>
//   )
// }

// export default Conversations
