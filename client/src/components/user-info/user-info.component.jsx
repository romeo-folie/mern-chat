import React from 'react'
import { Avatar, UserInfoContainer, UserSubTitle, UserTextWrapper, UserTitle } from './user-info.styles'

const UserInfo = ({ active, title, email, image, onClick }) => (
  <UserInfoContainer active={active ? 1 : 0} onClick={onClick}>
    <Avatar src={image}/>
    <UserTextWrapper>
      <UserTitle>{title}</UserTitle>
      <UserSubTitle mail={email}>{email || 'Online'}</UserSubTitle>
    </UserTextWrapper>
  </UserInfoContainer>
)

export default UserInfo