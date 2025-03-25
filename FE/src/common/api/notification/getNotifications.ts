import { NotificationDTO } from '../../../models/NotificationDTO';

/**
 * 알림 목록을 가져옵니다.
 * NotificationDTO를 사용해야 합니다. 이유는 NotificationDTO가 API 응답의 데이터 구조를 정의하는 데이터 전송 객체(Data Transfer Object)로, 백엔드에서 가져온 데이터를 클라이언트에서 사용할 때 적합합니다. 반면, NotificationModel은 일반적으로 데이터베이스 모델을 나타내며, API 응답과는 다를 수 있습니다.
 * @returns
 */
export default async function getNotifications(): Promise<NotificationDTO[]> {
    const response = await fetch('/api/notifications');
    return response.json();
}