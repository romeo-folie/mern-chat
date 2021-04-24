import tw from 'tailwind-styled-components'

export const SidebarContainer = tw.div`
  flex
  flex-col
  h-screen
  w-1/4
  bg-white
  justify-between
`

export const UserListWrapper = tw.div`
  flex
  flex-col
  justify-start
  items-center
  h-full
  overflow-y-auto  
  overscroll-none
  mt-10
`

export const SidebarHeader = tw.div`
  flex
  h-20
  border-b
  border-cyan
  items-center
`

export const SidebarFooter = tw.div`
  flex
  h-20
  border-t
  border-cyan
  w-full
  justify-center
  items-center
`

export const SidebarTitle = tw.h2`
  text-2xl
  text-left
  pl-8
  py-6
  text-dark-blue
  font-bold
`