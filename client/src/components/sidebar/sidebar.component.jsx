import React from "react";
import UserInfo from "../user-info/user-info.component";
import {
  SidebarContainer,
  SidebarFooter,
  SidebarHeader,
  SidebarTitle,
  UserListWrapper
} from "./sidebar.styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
        <SidebarHeader>
          <SidebarTitle>Active Users</SidebarTitle>
        </SidebarHeader>
        <UserListWrapper>
          <UserInfo active title="Random User One"/>
          <UserInfo title="Random User Two"/>
          <UserInfo title="Random User Three"/>
          <UserInfo title="Random User Four"/>
        </UserListWrapper>
        <SidebarFooter>
          <UserInfo title="Romeo Nutifafa Folie" email="romeofolie1@gmail.com"/>
        </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
