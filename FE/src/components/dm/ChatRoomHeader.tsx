import styled from "styled-components";
import { ChatRoom } from "../../models/ChatRoom";

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

export default function ChatRoomHeader({ selectedRoom, setSelectedRoom }: { selectedRoom: ChatRoom, setSelectedRoom: (room: ChatRoom) => void }) {
    return (
        <div
            style={{
                padding: '1rem',
                borderBottom: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
            }}
        >
            <BackButton onClick={() => setSelectedRoom(null)}>←</BackButton>
            <ChatRoomTitle>{selectedRoom.name}</ChatRoomTitle>
        </div>
    )
}