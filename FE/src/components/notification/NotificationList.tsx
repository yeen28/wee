import { NotificationImage, NotificationTime, NotificationMessage, NotificationTitle, NotificationContent, NotificationItem, NotificationText } from "../../css/Header";
import { NotificationDTO } from '../../models/NotificationDTO';

export default function NotificationList({ notification, onClick }: { notification: NotificationDTO, onClick: () => void }) {
    return (
        <div style={{
            maxHeight: '400px',
            overflowY: 'auto',
        }}>
            <NotificationItem key={notification.id} onClick={onClick}>
                <NotificationContent>
                    <NotificationImage src={notification.image} alt={notification.title} />
                    <NotificationText>
                        <NotificationTitle>{notification.title}</NotificationTitle>
                        <NotificationMessage>{notification.message}</NotificationMessage>
                        <NotificationTime>{notification.timestamp}</NotificationTime>
                    </NotificationText>
                </NotificationContent>
            </NotificationItem>
        </div>
    );
}