import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import getNotifications from '../common/api/notification/getNotifications';
import {HeaderContainer, HeaderContent, Logo, Nav, IconButton, NotificationButtonContainer, NotificationBadge, SettingsDialog, SettingsHeader, SettingsTitle, SettingsList, SettingsItem, SettingsItemContent, SettingsItemTitle, SettingsItemIcon, SettingsButtonContainer, SearchDialog, SearchContent, SearchHeader, SearchInput, SearchCloseButton, SearchBody, SearchSection, SearchSectionTitle, RecentSearches, SearchTag, PopularSearches, PopularSearchItem, SearchRank, SearchText, Backdrop} from '../css/Header.ts';
import { settingsItems } from '../common/mock/HeaderSettingsItems';
import { NotificationDTO } from '../models/NotificationDTO.ts';
import NotificationDialog from './notification/NotificationDialog.tsx';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState<NotificationDTO[]>([]);
  const notificationRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotifications(); // Fetch notifications immediately on component mount
    const fetchNotificationsInterval = setInterval(() => {
      fetchNotifications();
    }, 5000);

    return () => clearInterval(fetchNotificationsInterval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSearch]);

  const handleSettingsClick = (path: string) => {
    setShowSettings(false);
    if (path === '/logout') {
      // 로그아웃 처리
      console.log('Logging out...');
      navigate('/logout');
    } else {
      navigate(path);
    }
  };

  const recentSearches = [
    'BTS',
    'NewJeans',
    'SEVENTEEN',
    'TXT',
    'LE SSERAFIM'
  ];

  const popularSearches = [
    { rank: 1, text: 'BTS' },
    { rank: 2, text: 'NewJeans' },
    { rank: 3, text: 'SEVENTEEN' },
    { rank: 4, text: 'TXT' }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // 여기에 검색 로직 추가
    console.log('Searching for:', query);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
      setShowSearch(false);
    }
  };

  const fetchNotifications = async () => {
    setNotifications(await getNotifications());
  };

  const clickNotificationButton = () => {
    setShowNotifications(!showNotifications);
    fetchNotifications();

    // TODO 알림 배지 개수 초기화
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => navigate('/')}>Weverse</Logo>
        <Nav>
          <IconButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSearch(true)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </IconButton>

          <NotificationButtonContainer ref={notificationRef}>
            <IconButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => clickNotificationButton()}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
              </svg>
              <NotificationBadge>{notifications.length}</NotificationBadge>
            </IconButton>
            <AnimatePresence>
              {showNotifications && (
                <NotificationDialog
                  notifications={notifications}
                  setShowNotifications={setShowNotifications}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </NotificationButtonContainer>

          <SettingsButtonContainer ref={settingsRef}>
            <IconButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSettings(!showSettings)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            </IconButton>
            <AnimatePresence>
              {showSettings && (
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
                      onClick={() => setShowSettings(false)}
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

      <AnimatePresence>
        {showSearch && (
          <>
            <Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSearch(false)}
            />
            <SearchDialog
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSearch(false)}
            >
              <SearchContent
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <SearchHeader>
                  <form onSubmit={handleSearchSubmit} style={{ flex: 1 }}>
                    <SearchInput
                      ref={searchInputRef}
                      type="text"
                      placeholder="검색어를 입력하세요"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </form>
                  <SearchCloseButton onClick={() => setShowSearch(false)}>×</SearchCloseButton>
                </SearchHeader>
                <SearchBody>
                  <SearchSection>
                    <SearchSectionTitle>최근 검색어</SearchSectionTitle>
                    <RecentSearches>
                      {recentSearches.map((search, index) => (
                        <SearchTag key={index} onClick={() => handleSearch(search)}>
                          {search}
                        </SearchTag>
                      ))}
                    </RecentSearches>
                  </SearchSection>
                  <SearchSection>
                    <SearchSectionTitle>인기 검색어</SearchSectionTitle>
                    <PopularSearches>
                      {popularSearches.map((search) => (
                        <PopularSearchItem key={search.rank} onClick={() => handleSearch(search.text)}>
                          <SearchRank>{search.rank}</SearchRank>
                          <SearchText>{search.text}</SearchText>
                        </PopularSearchItem>
                      ))}
                    </PopularSearches>
                  </SearchSection>
                </SearchBody>
              </SearchContent>
            </SearchDialog>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
