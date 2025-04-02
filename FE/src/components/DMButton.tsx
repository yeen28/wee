import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ChatRoom from './dm/ChatRoom';
import ChatHeader from './dm/ChatHeader';
import getDmMessage from '../common/api/dm/getDmMessage';
import { DmDTO } from '../models/DmDTO';

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
  const [chatRooms, setChatRooms] = useState<DmDTO[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleNewChat = () => {
    // 여기에 새로운 채팅방 생성 로직 추가
    console.log('Creating new chat room');
  };

    // window.addEventListener('setShowChat', (event: CustomEvent) => {
    //   setShowChat(event.detail.showChat);
    // });

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

  const clickDMButton = () => {
    // setShowChat(!showChat);
    getDmMessage()
      .then(data => {
        setChatRooms(data);
      });
  };

  return (
    <DMButtonContainer onClick={clickDMButton}>
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
              <ChatRoom selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
            ) : (
              <>
                <ChatHeader />
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