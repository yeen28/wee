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
  width: 350px;
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

const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const ChatAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ChatInfo = styled.div`
  flex: 1;
`;

const ChatName = styled.div`
  font-weight: 500;
  color: #333;
  margin-bottom: 0.2rem;
`;

const ChatPreview = styled.div`
  font-size: 0.9rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatTime = styled.div`
  font-size: 0.8rem;
  color: #999;
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

const DMButtonComponent: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  const chats = [
    {
      id: 1,
      name: 'BTS',
      preview: '안녕하세요!',
      time: '10:30',
      avatar: '💜'
    },
    {
      id: 2,
      name: 'SEVENTEEN',
      preview: '새로운 콘텐츠가 업로드되었습니다.',
      time: '09:15',
      avatar: '💎'
    },
    {
      id: 3,
      name: 'NewJeans',
      preview: '오늘도 좋은 하루 되세요!',
      time: '어제',
      avatar: '🐰'
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // 여기에 메시지 전송 로직 추가
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setShowChat(false);
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
            <ChatHeader>
              <ChatTitle>메시지</ChatTitle>
              <ChatCloseButton onClick={() => setShowChat(false)}>×</ChatCloseButton>
            </ChatHeader>
            <ChatList>
              {chats.map((chat) => (
                <ChatItem key={chat.id}>
                  <ChatAvatar>{chat.avatar}</ChatAvatar>
                  <ChatInfo>
                    <ChatName>{chat.name}</ChatName>
                    <ChatPreview>{chat.preview}</ChatPreview>
                  </ChatInfo>
                  <ChatTime>{chat.time}</ChatTime>
                </ChatItem>
              ))}
            </ChatList>
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
          </ChatDialog>
        )}
      </AnimatePresence>
    </DMButtonContainer>
  );
};

export default DMButtonComponent; 