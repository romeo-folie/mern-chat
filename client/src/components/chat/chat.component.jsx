import React, { useState, useContext, useEffect, useRef } from "react";
import {
  ChatContainer,
  ChatHeader,
  ChatFooter,
  ChatInput,
  SendButton,
  BlockButton,
  UnblockButton,
  MessageWrapper,
  SentMessage,
  ReceivedMessage,
} from "./chat.styles";
import { ChatUserInfoContainer, SubTitle } from "./chat.styles";
import {
  Avatar,
  UserTitle,
  UserTextWrapper,
} from "../user-info/user-info.styles";
import { SocketContext } from "../../context/socket";

const ChatUserInfo = ({ title, email, image }) => (
  <ChatUserInfoContainer>
    {image ? <Avatar src={image} /> : null}
    <UserTextWrapper>
      <UserTitle>{title}</UserTitle>
      <SubTitle>{email}</SubTitle>
    </UserTextWrapper>
  </ChatUserInfoContainer>
);

const Chat = ({ user, activeUser, onBlockUser }) => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageWrapperRef = useRef(null);

  useEffect(() => {
    socket.on("in message", (data) => {
      const { sender } = data;

      if (sender.email === activeUser.email) {
        setMessages((messages) => [...messages, data]);
      }
    });

    socket.on("loaded conversation", (data) => {
      setMessages(data);
    });

    messageWrapperRef.current.scrollIntoView({ behavior: "smooth", block: 'end' });
    // messageWrapperRef.current.scrollTop = messageWrapperRef.current.scrollHeight - messageWrapperRef.current.clientHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUser]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    //emit a new event here with the message as well as the active user's socket id
    if (message) {
      const messageData = {
        sender: user,
        recepient: activeUser,
        message: message.trim(),
      };

      socket.emit("out message", messageData, () => {
        setMessages((messages) => [...messages, messageData]);
        setMessage("");
      });
    }

  };

  const handleMessageInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleBlockClick = (user) => {
    // block the active user
    // emit an event with this
    user.blocked = true;
    socket.emit("block user", user, () => onBlockUser(user));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleMessageSubmit(event);
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <ChatUserInfo
          title={
            activeUser.name === activeUser.email
              ? activeUser.nickname
              : activeUser.name
          }
          email={activeUser.email}
          image={activeUser.picture}
        />
        {Object.keys(activeUser).length && !activeUser.blocked ? (
          <BlockButton onClick={() => handleBlockClick(activeUser)}>
            Block
          </BlockButton>
        ) : null}

        {/* {Object.keys(activeUser).length && activeUser.blocked ? (
          <UnblockButton>Unblock</UnblockButton>
        ) : null} */}
      </ChatHeader>

      <MessageWrapper ref={messageWrapperRef}>
        {Object.keys(activeUser).length && messages.length
          ? messages.map((m, idx) => {
              if (m.sender.email === activeUser.email) {
                return <ReceivedMessage key={m.message + idx.toString()}>{m.message}</ReceivedMessage>;
              }
              return <SentMessage key={m.message + idx.toString()}>{m.message}</SentMessage>;
            })
          : null}
      </MessageWrapper>

      <ChatFooter>
        <ChatInput
          value={message}
          placeholder="Type a message"
          onChange={handleMessageInputChange}
          disabled={!Object.keys(activeUser).length}
          onKeyDown={handleKeyDown}
        />
        <SendButton
          disabled={!Object.keys(activeUser).length || !message.length}
          onClick={handleMessageSubmit}
        >
          Send
        </SendButton>
      </ChatFooter>
    </ChatContainer>
  );
};

export default Chat;
