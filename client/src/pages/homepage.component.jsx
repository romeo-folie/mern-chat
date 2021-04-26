import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { HomeContainer } from "./homepage.styles";
import Sidebar from "../components/sidebar/sidebar.component";
import Chat from "../components/chat/chat.component";
import { SocketContext } from "../context/socket";

const Homepage = () => {
  const { user } = useAuth0();
  const socket = useContext(SocketContext);

  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    socket.emit("new user", user, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on("users", (userData) => {
      userData = userData.filter(
        (use) => use.name !== user.name && use.email !== user.email
      );
      setUsers(userData);
      setActiveUser({});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUserSelect = (user) => {
    setActiveUser({...user});
  };

  return (
    <HomeContainer>
      <Sidebar
        user={user}
        users={users}
        onUserSelect={onUserSelect}
        activeUser={activeUser}
      />
      <Chat user={user} activeUser={activeUser} onBlockUser={onUserSelect}/>
    </HomeContainer>
  );
};

export default Homepage;
