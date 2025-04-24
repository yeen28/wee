import { motion } from "framer-motion";
import ChatRoomHeader from "./ChatRoomHeader";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { DmDTO } from "../../models/DmDTO";

interface ChatMessage {
    id: number;
    text: string;
    time: string;
    isUser: boolean;
}

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

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function ChatRoom({ selectedRoom, setSelectedRoom }: { selectedRoom: DmDTO, setSelectedRoom: (room: DmDTO | null) => void }) {
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

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

            console.log(newMessage);

            // setSelectedRoom(prev => prev ? {
            //     ...prev,
            //     messages: [...prev.messages, newMessage],
            //     preview: message,
            //     time: newMessage.time
            // } : null);

            setMessage('');
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [selectedRoom?.messages]);

    return (
        <motion.div style={{
            position: 'fixed',
            bottom: '5rem',
            right: '2rem',
            width: '400px',
            height: '500px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
        }}>
            <ChatRoomHeader selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
            <ChatMessages>
                {selectedRoom?.messages?.map((msg: ChatMessage) => (
                    <ChatMessage key={msg.id} message={msg} avatar={selectedRoom?.avatar} name={selectedRoom?.name} />
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
        </motion.div>
    );
}