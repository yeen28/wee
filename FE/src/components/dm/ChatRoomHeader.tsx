import styled from "styled-components";
import BackButton from "./BackButton";
import { DmDTO } from "../../models/DmDTO";

const ChatRoomTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

type ChatRoomHeaderProps = {
  selectedRoom: DmDTO;
  setSelectedRoom: (room: DmDTO | null) => void;
};

export default function ChatRoomHeader({ selectedRoom, setSelectedRoom }: ChatRoomHeaderProps) {
    const handleBack = () => {
        setSelectedRoom(null);  // 채팅방 선택 해제
    };

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
            <BackButton onBack={handleBack} />
            <ChatRoomTitle>{selectedRoom.name}</ChatRoomTitle>
        </div>
    );
}