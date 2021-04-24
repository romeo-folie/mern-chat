import React from 'react'
import { Avatar, UserInfoContainer, UserSubTitle, UserTextWrapper, UserTitle } from './user-info.styles'

const UserInfo = ({ active, title, email, header }) => (
  <UserInfoContainer active={active} header={header}>
    <Avatar />
    <UserTextWrapper>
      <UserTitle>{title}</UserTitle>
      <UserSubTitle mail={email}>{email || 'Online'}</UserSubTitle>
    </UserTextWrapper>
  </UserInfoContainer>
)

export default UserInfo