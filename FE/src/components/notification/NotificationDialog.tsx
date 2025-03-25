import { IconButton, NotificationDialogTitle, NotificationHeader } from "../../css/Header"
import NotificationList from "./NotificationList";
import { NotificationDTO } from "../../models/NotificationDTO";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NotificationDialogProps {
    notifications: NotificationDTO[];
    setShowNotifications: (show: boolean) => void;
    initial?: { opacity: number; y: number };
    animate?: { opacity: number; y: number };
    exit?: { opacity: number; y: number };
    transition?: { duration: number };
}

export default function NotificationDialog({ notifications, setShowNotifications, initial, animate, exit, transition }: NotificationDialogProps) {
    const navigate = useNavigate();
    const movePage = (link: string) => {
        console.log(link);
        navigate(link);
        setShowNotifications(false);
    }
    return (
        <motion.div style={{
            position: 'absolute',
            top: '100%',
            right: '-2rem',
            width: '320px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            marginTop: '0.5rem',
            overflow: 'hidden',
        }}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
        >
            <NotificationHeader>
                <NotificationDialogTitle>알림</NotificationDialogTitle>
                <IconButton
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setShowNotifications(false)}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </IconButton>
            </NotificationHeader>
            {notifications.map((notification) => (
                <NotificationList
                    key={notification.id}
                    notification={notification}
                    onClick={() => movePage(notification.link)}
                />
            ))}
        </motion.div>
    );
}