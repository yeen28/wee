import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Features from './components/Features';
import Footer from './components/Footer';
import AccountSettings from './pages/AccountSettings';
import DMButtonComponent from './components/DMButton';
import './App.css';

// 임시 설정 페이지 컴포넌트들
const NotificationSettings = () => <div>알림 설정 페이지</div>;
const LanguageSettings = () => <div>언어 설정 페이지</div>;
const ThemeSettings = () => <div>테마 설정 페이지</div>;
const PrivacyPolicy = () => <div>개인정보 처리방침 페이지</div>;
const TermsOfService = () => <div>이용약관 페이지</div>;
const Logout = () => <div>로그아웃 처리 중...</div>;

const Home = () => (
  <>
    <Hero />
    <Artists />
    <Features />
  </>
);

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: white;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings/account" element={<AccountSettings />} />
            <Route path="/settings/notifications" element={<NotificationSettings />} />
            <Route path="/settings/language" element={<LanguageSettings />} />
            <Route path="/settings/theme" element={<ThemeSettings />} />
            <Route path="/settings/privacy" element={<PrivacyPolicy />} />
            <Route path="/settings/terms" element={<TermsOfService />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <Footer />
        <DMButtonComponent />
      </AppContainer>
    </Router>
  );
};

export default App;