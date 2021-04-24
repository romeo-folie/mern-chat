import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { io } from "socket.io-client";
import { HomeContainer } from './homepage.styles'
import Sidebar from "../components/sidebar/sidebar.component";
import Chat from "../components/chat/chat.component";

const Homepage = (props) => {
  const {
    // loginWithRedirect,
    // logout,
    // isAuthenticated,
    // isLoading,
    user,
  } = useAuth0();
  const endpoint = "http://localhost:5000"

  useEffect(() => {
    const socket = io(endpoint)
    socket.emit("testing", user)

    return () => {
      socket.disconnect()
    }
  }, [user])

  return (
    <HomeContainer>
      <Sidebar />
      <Chat />
    </HomeContainer>
  );
};

export default Homepage;
