import { DmMessageDTO } from "./DmMessageDTO";

// 백엔드 응답 타입 정의
export interface BackendDmDTO {
    id: number;
    senderId: string;
    receiverId: string;
    content: string;
    sentAt: string;
    isRead: boolean;
}

// 프론트엔드에서 사용할 타입
export interface DmDTO {
    id: number;
    name: string;
    avatar: string;
    preview: string;
    time: string;
    messages: DmMessageDTO[];
}

// 변환 함수
export function convertBackendDmToFrontend(backendDm: BackendDmDTO): DmDTO {
    return {
        id: backendDm.id,
        name: backendDm.senderId,      // senderId를 name으로 사용
        avatar: '💬',                   // 기본 아바타 설정
        preview: backendDm.content,    // content를 preview로 사용
        time: backendDm.sentAt,        // sentAt을 time으로 사용
        messages: []                    // 초기 messages는 빈 배열
    };
}