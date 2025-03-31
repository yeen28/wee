import styled from 'styled-components';

interface ChatMessage {
    id: number;
    text: string;
    time: string;
    isUser: boolean;
}

const MessageContainer = styled.div<{ isUser: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  flex-direction: ${props => props.isUser ? 'row-reverse' : 'row'};
  width: 100%;
`;

const MessageProfile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 32px);
`;

const Message = styled.div<{ isUser: boolean }>`
  display: inline-block;
  padding: 0.8rem;
  border-radius: 12px;
  background: ${props => props.isUser ? '#333' : '#f0f0f0'};
  color: ${props => props.isUser ? 'white' : '#333'};
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  word-wrap: break-word;
  max-width: 100%;
  white-space: pre-wrap;
`;

const MessageTime = styled.div<{ isUser: boolean }>`
  font-size: 0.7rem;
  color: #999;
  margin-top: 0.2rem;
  text-align: ${props => props.isUser ? 'right' : 'left'};
`;

const OpponentName = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.2rem;
`;

export default function ChatMessage({ message, avatar, name }: { message: ChatMessage, avatar: string, name: string }) {
    return (
        <MessageContainer key={message.id} isUser={message.isUser}>
            {!message.isUser && <MessageProfile>{avatar}</MessageProfile>}
            <MessageContent>
                {!message.isUser && <OpponentName>{name}</OpponentName>}
                <Message isUser={message.isUser}>{message.text}</Message>
                <MessageTime isUser={message.isUser}>{message.time}</MessageTime>
            </MessageContent>
        </MessageContainer>
    );
}