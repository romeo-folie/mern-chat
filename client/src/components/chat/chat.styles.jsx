import tw from 'tailwind-styled-components'
import { InfoContainer, UserSubTitle } from '../user-info/user-info.styles'

export const ChatContainer = tw.div`
  flex
  flex-col
  h-full
  w-3/4
  justify-between
  pb-4
`

export const MessageWrapper = tw.div`
  p-5
  justify-end
  h-full
  w-full
  overflow-y-auto
  overscroll-contain
`

export const ChatUserInfoContainer = tw(InfoContainer)`
  bg-transparent
`

export const SubTitle = tw(UserSubTitle)`
  text-ash
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
  h-9
  w-24
  py-2
  px-3
  rounded-md
  text-sm
  text-red-600
  hover:text-white
  hover:bg-red-600
  focus:outline-none
`

export const UnblockButton = tw.button`
  border
  h-9
  w-24
  py-2
  px-3
  rounded-md
  text-sm
  hover:text-white
  focus:outline-none
  border-green-600
  text-green-600
  hover:bg-green-600
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
  text-teal
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
  disabled:opacity-50
  disabled:cursor-text
`  

export const SentMessage = tw.div`
  ml-auto
  p-3
  rounded-lg
  bg-teal
  max-w-1/4
  text-white
  my-1
  text-sm	
`

export const ReceivedMessage = tw.div`
  mr-auto
  p-3
  rounded-lg
  bg-dark-blue
  text-white
  my-1
  max-w-1/4
  text-sm
`


