import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const DMButtonContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`;

const DMButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;

  &:hover {
    background: #444;
    transform: scale(1.05);
  }
`;

const ChatDialog = styled(motion.div)`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  width: 400px;
  height: 500px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
`;

const ChatHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const ChatCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #333;
  }
`;

const ChatListContainer = styled.div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`;

const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const ChatAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ChatName = styled.div`
  font-weight: 500;
  color: #333;
  margin-bottom: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;
`;

const ChatPreview = styled.div`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatTime = styled.div`
  font-size: 0.75rem;
  color: #999;
  flex-shrink: 0;
  margin-left: 0.3rem;
`;

const ChatInput = styled.div`
  padding: 1rem;
  border-top: 1px solid #eee;
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #666;
  }
`;

const SendButton = styled.button`
  padding: 0.8rem 1.2rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #444;
  }
`;

const ChatRoom = styled(motion.div)`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  width: 400px;
  height: 500px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
`;

const ChatRoomHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #333;
  }
`;

const ChatRoomTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

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

const NewChatButton = styled(motion.button)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
  z-index: 1000;

  &:hover {
    background: #444;
    transform: scale(1.05);
  }
`;

const OpponentName = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.2rem;
`;

interface ChatMessage {
  id: number;
  text: string;
  time: string;
  isUser: boolean;
}

interface ChatRoom {
  id: number;
  name: string;
  avatar: string;
  preview: string;
  time: string;
  messages: ChatMessage[];
}

const DMButtonComponent: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<ChatRoom | null>(null);
  const [message, setMessage] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatRooms: ChatRoom[] = [
    {
      id: 1,
      name: 'BTS',
      avatar: '💜',
      preview: '안녕하세요!',
      time: '10:30',
      messages: [
        { id: 1, text: '안녕하세요!', time: '10:30', isUser: false },
        { id: 2, text: '안녕하세요! 반가워요', time: '10:31', isUser: true }
      ]
    },
    {
      id: 2,
      name: 'SEVENTEEN',
      avatar: '💎',
      preview: '새로운 콘텐츠가 업로드되었습니다.',
      time: '09:15',
      messages: [
        { id: 3, text: '새로운 콘텐츠가 업로드되었습니다.', time: '09:15', isUser: false }
      ]
    },
    {
      id: 3,
      name: 'NewJeans',
      avatar: '🐰',
      preview: '오늘도 좋은 하루 되세요!',
      time: '어제',
      messages: [
        { id: 4, text: '오늘도 좋은 하루 되세요!', time: '어제', isUser: false }
      ]
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedRoom?.messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && selectedRoom) {
      const newMessage: ChatMessage = {
        id: Date.now(),
        text: message,
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        isUser: true
      };
      
      // 여기에 실제 메시지 전송 로직 추가
      console.log('Sending message:', message);
      
      setSelectedRoom(prev => prev ? {
        ...prev,
        messages: [...prev.messages, newMessage],
        preview: message,
        time: newMessage.time
      } : null);
      
      setMessage('');
    }
  };

  const handleNewChat = () => {
    // 여기에 새로운 채팅방 생성 로직 추가
    console.log('Creating new chat room');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setShowChat(false);
        setSelectedRoom(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DMButtonContainer>
      <DMButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowChat(!showChat)}
      >
        💬
      </DMButton>

      <AnimatePresence>
        {showChat && (
          <ChatDialog
            ref={chatRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {selectedRoom ? (
              <ChatRoom>
                <ChatRoomHeader>
                  <BackButton onClick={() => setSelectedRoom(null)}>←</BackButton>
                  <ChatRoomTitle>{selectedRoom.name}</ChatRoomTitle>
                </ChatRoomHeader>
                <ChatMessages>
                  {selectedRoom.messages.map((msg) => (
                    <MessageContainer key={msg.id} isUser={msg.isUser}>
                      {!msg.isUser && <MessageProfile>{selectedRoom.avatar}</MessageProfile>}
                      <MessageContent>
                        {!msg.isUser && <OpponentName>{selectedRoom.name}</OpponentName>}
                        <Message isUser={msg.isUser}>{msg.text}</Message>
                        <MessageTime isUser={msg.isUser}>{msg.time}</MessageTime>
                      </MessageContent>
                    </MessageContainer>
                  ))}
                  <div ref={messagesEndRef} />
                </ChatMessages>
                <form onSubmit={handleSendMessage}>
                  <ChatInput>
                    <Input
                      type="text"
                      placeholder="메시지를 입력하세요"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <SendButton type="submit">전송</SendButton>
                  </ChatInput>
                </form>
              </ChatRoom>
            ) : (
              <>
                <ChatHeader>
                  <ChatTitle>메시지</ChatTitle>
                  <ChatCloseButton onClick={() => setShowChat(false)}>×</ChatCloseButton>
                </ChatHeader>
                <ChatListContainer>
                  <ChatList>
                    {chatRooms.map((room) => (
                      <ChatItem key={room.id} onClick={() => setSelectedRoom(room)}>
                        <ChatAvatar>{room.avatar}</ChatAvatar>
                        <ChatInfo>
                          <ChatName>{room.name}</ChatName>
                          <ChatPreview>{room.preview}</ChatPreview>
                        </ChatInfo>
                        <ChatTime>{room.time}</ChatTime>
                      </ChatItem>
                    ))}
                  </ChatList>
                  <NewChatButton
                    onClick={handleNewChat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ✏️
                  </NewChatButton>
                </ChatListContainer>
              </>
            )}
          </ChatDialog>
        )}
      </AnimatePresence>
    </DMButtonContainer>
  );
};

export default DMButtonComponent; 