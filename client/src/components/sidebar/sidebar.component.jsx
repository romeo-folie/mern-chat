import React, { useContext } from "react";
import UserInfo from "../user-info/user-info.component";
import {
  SidebarContainer,
  SidebarFooter,
  SidebarHeader,
  SidebarTitle,
  LogoutButton,
  UserListWrapper,
} from "./sidebar.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { SocketContext } from "../../context/socket";

const Sidebar = ({ user, users, onUserSelect, activeUser }) => {
  const { logout } = useAuth0();
  const socket = useContext(SocketContext);

  const handleUserClick = (u) => {
    //emit an event to get all conversations between this user and the activeUser
    socket.emit("load conversation", { sender: user, recepient: u })
    onUserSelect(u)
  }

  const userInfoCards = users.map((u) => (
    <UserInfo
      key={u.email}
      title={u.name === u.email ? u.nickname : u.name}
      image={u.picture}
      onClick={() => handleUserClick(u)}
      active={u.id === activeUser.id ? true : false}
    />
  ))



  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarTitle>Active Users</SidebarTitle>
        <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
      </SidebarHeader>
      <UserListWrapper>
        {
          userInfoCards
        }
      </UserListWrapper>
      <SidebarFooter>
        <UserInfo
          title={user.name === user.email ? user.nickname : user.name}
          email={user.email}
          image={user.picture}
        />
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
