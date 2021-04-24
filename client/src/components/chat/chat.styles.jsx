import tw from 'tailwind-styled-components'

export const ChatContainer = tw.div`
  h-screen
  w-3/4
  flex
  flex-col
  justify-between
  pb-4
`

export const ChatHeader = tw.header`
  h-20
  flex
  justify-between
  w-full
  bg-white
  items-center
  px-3
`

export const BlockButton = tw.button`
  border
  border-red
  h-10
  w-24
  py-2
  px-3
  rounded-md
  text-red-600
  hover:text-white
  hover:bg-red-600
  focus:outline-none
`

export const ChatFooter = tw.footer`
  flex
  w-full
  justify-around
  h-14
  items-center
`

export const ChatInput = tw.input`
  w-4/5
  h-full
  bg-white
  text-ash
  border
  rounded-md
  border-teal
  pl-3
  focus:outline-none
`

export const SendButton = tw.button`
  bg-teal
  h-full
  w-32
  py-2
  px-3
  rounded-md
  text-white
  focus:outline-none
`  

export const MessageWrapper = tw.div`
  flex
  flex-col
  overflow-y-auto
  overscroll-none
  p-5
  justify-end
  items-start
  h-full
  w-full
`

export const SentMessage = tw.div`
  ml-auto
  p-3
  rounded-lg
  bg-teal
  text-white
  relative
  my-1
  max-w-1/2
  text-sm	
`

export const ReceivedMessage = tw.div`
  mr-auto
  p-3
  rounded-lg
  bg-dark-blue
  text-white
  relative
  my-1
  max-w-1/2
  text-sm
`


