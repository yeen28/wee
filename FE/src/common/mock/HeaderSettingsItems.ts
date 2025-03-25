export const settingsItems = [
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
        title: typeof window !== 'undefined' && 'userId' in window ? '로그아웃' : '로그인',
        icon: typeof window !== 'undefined' && 'userId' in window ? '🚪' : '🔑',
        path: typeof window !== 'undefined' && 'userId' in window ? '/logout' : '/login'
    }
];