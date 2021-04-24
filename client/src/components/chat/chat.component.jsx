import React from 'react'
import { ChatContainer, ChatHeader, ChatFooter, ChatInput, SendButton, BlockButton, MessageWrapper, SentMessage, ReceivedMessage } from './chat.styles'
import UserInfo from '../user-info/user-info.component'

const Chat = () => (
  <ChatContainer>
    <ChatHeader>
      <UserInfo header title="Random User One" email="randomuser@mail.com"/>
      <BlockButton>Block</BlockButton>
    </ChatHeader>
    <MessageWrapper>
      <SentMessage>
        Hey there this is a test message
        Hey there this is a test message
        Hey there this is a test message
      </SentMessage>
      
      <ReceivedMessage>
        Hey there this is a test message
      </ReceivedMessage>

      <SentMessage>
        Hey there this is a test message
      </SentMessage>

      
      <ReceivedMessage>
        Hey there this is a test message
        Hey there this is a test message
        Hey there this is a test message
      </ReceivedMessage>

    </MessageWrapper>
    <ChatFooter>
      <ChatInput placeholder="Type a message" />
      <SendButton>Send</SendButton>
    </ChatFooter>
  </ChatContainer>
);

export default Chat;