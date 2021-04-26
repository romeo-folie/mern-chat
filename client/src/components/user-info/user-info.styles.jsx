import tw from 'tailwind-styled-components'

export const InfoContainer = tw.div`
  flex
  justify-start
  rounded-lg
  py-3
  pl-3
  my-1
  items-center
`

export const UserInfoContainer = tw(InfoContainer)`
  w-10/12
  ${props => props.active ? "bg-cyan" : "bg-transparent"}
  cursor-pointer
`

export const UserTextWrapper = tw.div`
  flex
  flex-col
  justify-around
  items-left
`

export const UserTitle = tw.h4`
  text-base
  font-semibold
  text-left
  text-dark-blue
`

export const InfoSubTitle = tw.h5`
  text-sm
  font-normal
  text-left
`

export const UserSubTitle = tw(InfoSubTitle)`
  ${props => props.mail ? "text-ash" : "text-teal"}
`

export const Avatar = tw.img`
  h-10
  w-10
  rounded-full
  bg-ash
  mr-4
`