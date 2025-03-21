import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff4444;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
`;

const NotificationDialog = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: -2rem;
  width: 320px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  overflow: hidden;
`;

const NotificationHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotificationDialogTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const NotificationList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const NotificationItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const NotificationContent = styled.div`
  display: flex;
  gap: 1rem;
`;

const NotificationImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
`;

const NotificationText = styled.div`
  flex: 1;
`;

const NotificationTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
`;

const NotificationMessage = styled.p`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
`;

const NotificationTime = styled.span`
  font-size: 0.7rem;
  color: #999;
`;

const SettingsDialog = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: -2rem;
  width: 320px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  overflow: hidden;
`;

const SettingsHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SettingsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const SettingsList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const SettingsItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const SettingsItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SettingsItemTitle = styled.span`
  font-size: 0.9rem;
  color: #333;
`;

const SettingsItemIcon = styled.div`
  color: #666;
  display: flex;
  align-items: center;
`;

const NotificationButtonContainer = styled.div`
  position: relative;
`;

const SettingsButtonContainer = styled.div`
  position: relative;
`;

const Header: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSettingsClick = (path: string) => {
    setIsSettingsOpen(false);
    if (path === '/logout') {
      // 로그아웃 처리
      console.log('Logging out...');
      navigate('/logout');
    } else {
      navigate(path);
    }
  };

  const notifications = [
    {
      id: 1,
      title: 'BTS',
      message: '새로운 포스트가 업로드되었습니다.',
      time: '10분 전',
      image: 'https://via.placeholder.com/48'
    },
    {
      id: 2,
      title: 'SEVENTEEN',
      message: '라이브 스트리밍이 시작되었습니다.',
      time: '1시간 전',
      image: 'https://via.placeholder.com/48'
    },
    {
      id: 3,
      title: 'LE SSERAFIM',
      message: '새로운 콘텐츠가 추가되었습니다.',
      time: '2시간 전',
      image: 'https://via.placeholder.com/48'
    }
  ];

  const settingsItems = [
    {
      id: 1,
      title: '계정 설정',
      icon: '👤',
      path: '/settings/account'
    },
    {
      id: 2,
      title: '알림 설정',
      icon: '🔔',
      path: '/settings/notifications'
    },
    {
      id: 3,
      title: '언어 설정',
      icon: '🌐',
      path: '/settings/language'
    },
    {
      id: 4,
      title: '테마 설정',
      icon: '🎨',
      path: '/settings/theme'
    },
    {
      id: 5,
      title: '개인정보 처리방침',
      icon: '📄',
      path: '/settings/privacy'
    },
    {
      id: 6,
      title: '이용약관',
      icon: '📜',
      path: '/settings/terms'
    },
    {
      id: 7,
      title: '로그아웃',
      icon: '🚪',
      path: '/logout'
    }
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Weverse</Logo>
        <Nav>
          <IconButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </IconButton>
          <NotificationButtonContainer ref={notificationRef}>
            <IconButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
              </svg>
              <NotificationBadge>3</NotificationBadge>
            </IconButton>
            <AnimatePresence>
              {isNotificationOpen && (
                <NotificationDialog
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <NotificationHeader>
                    <NotificationDialogTitle>알림</NotificationDialogTitle>
                    <IconButton
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setIsNotificationOpen(false)}
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    </IconButton>
                  </NotificationHeader>
                  <NotificationList>
                    {notifications.map((notification) => (
                      <NotificationItem key={notification.id}>
                        <NotificationContent>
                          <NotificationImage src={notification.image} alt={notification.title} />
                          <NotificationText>
                            <NotificationTitle>{notification.title}</NotificationTitle>
                            <NotificationMessage>{notification.message}</NotificationMessage>
                            <NotificationTime>{notification.time}</NotificationTime>
                          </NotificationText>
                        </NotificationContent>
                      </NotificationItem>
                    ))}
                  </NotificationList>
                </NotificationDialog>
              )}
            </AnimatePresence>
          </NotificationButtonContainer>
          <SettingsButtonContainer ref={settingsRef}>
            <IconButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            </IconButton>
            <AnimatePresence>
              {isSettingsOpen && (
                <SettingsDialog
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <SettingsHeader>
                    <SettingsTitle>설정</SettingsTitle>
                    <IconButton
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setIsSettingsOpen(false)}
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    </IconButton>
                  </SettingsHeader>
                  <SettingsList>
                    {settingsItems.map((item) => (
                      <SettingsItem 
                        key={item.id}
                        onClick={() => handleSettingsClick(item.path)}
                      >
                        <SettingsItemContent>
                          <span>{item.icon}</span>
                          <SettingsItemTitle>{item.title}</SettingsItemTitle>
                        </SettingsItemContent>
                        <SettingsItemIcon>
                          <svg viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6L8.59 7.41 13.17 12z"/>
                          </svg>
                        </SettingsItemIcon>
                      </SettingsItem>
                    ))}
                  </SettingsList>
                </SettingsDialog>
              )}
            </AnimatePresence>
          </SettingsButtonContainer>
          <IconButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </IconButton>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
