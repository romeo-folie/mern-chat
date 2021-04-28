import React, { useState, useContext, useEffect, useRef } from "react";
import {
  ChatContainer,
  ChatHeader,
  ChatFooter,
  ChatInput,
  SendButton,
  BlockButton,
  // UnblockButton,
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
    const receivedMessageHandler = (data) => {
      const { sender } = data;

      if (sender.email === activeUser.email) {
        setMessages((messages) => [...messages, data]);
      }
    };
    socket.on("in message", receivedMessageHandler);

    const loadedConversationHandler = (data) => {
      setMessages(data);
    };
    socket.on("loaded conversation", loadedConversationHandler);

    messageWrapperRef.current.addEventListener('DOMNodeInserted', event => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    });

    return () => {
      socket.off("in message", receivedMessageHandler);
      socket.off("loaded conversation", loadedConversationHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUser]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    //emit a new event here with the message as well as the active user's socket id
    if (message) {
      const sentMessageData = {
        sender: user,
        recepient: activeUser,
        message: message.trim(),
      };

      socket.emit("out message", sentMessageData, (receivedMessageData) => {
        setMessages((messages) => [...messages, receivedMessageData]);
        setMessage("");
      });
    }
  };

  const handleMessageInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleBlockClick = (user, blocker) => {
    // block the active user
    // emit an event with this
    user.blocked = true;
    socket.emit("block user", { user, blocker }, () => onBlockUser(user));
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
          <BlockButton onClick={() => handleBlockClick(activeUser, user)}>
            Block
          </BlockButton>
        ) : null}

        {/* {Object.keys(activeUser).length && activeUser.blocked ? (
          <UnblockButton>Unblock</UnblockButton>
        ) : null} */}
      </ChatHeader>

      <MessageWrapper ref={messageWrapperRef}>
          {Object.keys(activeUser).length && messages.length
            ? messages.map((m) => {
                if (m.sender.email === activeUser.email) {
                  return (
                    <ReceivedMessage key={m.message.id}>
                      {m.message.text}
                    </ReceivedMessage>
                  );
                }
                return (
                  <SentMessage key={m.message.id}>{m.message.text}</SentMessage>
                );
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
