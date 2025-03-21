import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
`;

const Section = styled(motion.section)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: #f8f8f8;
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const DialogOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Dialog = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const DialogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const DialogContent = styled.div`
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${props => props.variant === 'primary' ? `
    background: #333;
    color: white;
    border: none;

    &:hover {
      background: #444;
    }
  ` : `
    background: white;
    color: #333;
    border: 1px solid #ddd;

    &:hover {
      background: #f8f8f8;
    }
  `}
`;

const CloseButton = styled.button`
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

const AccountSettings: React.FC = () => {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    language: 'ko',
    theme: 'light'
  });

  const sections = [
    {
      title: '프로필',
      items: [
        {
          icon: '👤',
          title: '프로필 정보',
          description: '이름, 프로필 사진, 소개 등 기본 정보를 관리합니다.'
        },
        {
          icon: '🔒',
          title: '비밀번호',
          description: '계정 비밀번호를 변경합니다.'
        },
        {
          icon: '📱',
          title: '연락처',
          description: '휴대폰 번호와 이메일 주소를 관리합니다.'
        }
      ]
    },
    {
      title: '알림',
      items: [
        {
          icon: '🔔',
          title: '알림 설정',
          description: '푸시 알림과 이메일 알림을 설정합니다.'
        },
        {
          icon: '⚡',
          title: '실시간 알림',
          description: '실시간 알림 수신 설정을 관리합니다.'
        }
      ]
    },
    {
      title: '보안',
      items: [
        {
          icon: '🔐',
          title: '2단계 인증',
          description: '계정 보안을 위한 2단계 인증을 설정합니다.'
        },
        {
          icon: '📱',
          title: '기기 관리',
          description: '로그인된 기기 목록을 확인하고 관리합니다.'
        }
      ]
    },
    {
      title: '기타',
      items: [
        {
          icon: '🌐',
          title: '언어 설정',
          description: '서비스 사용 언어를 변경합니다.'
        },
        {
          icon: '🎨',
          title: '테마 설정',
          description: '다크 모드 등 테마를 설정합니다.'
        },
        {
          icon: '🗑️',
          title: '계정 삭제',
          description: 'Weverse 계정을 삭제합니다.'
        }
      ]
    }
  ];

  const handleSettingClick = (setting: string) => {
    setSelectedSetting(setting);
  };

  const handleClose = () => {
    setSelectedSetting(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // 여기에 설정 저장 로직 추가
    console.log('Saving settings:', formData);
    handleClose();
  };

  const renderDialogContent = () => {
    switch (selectedSetting) {
      case '프로필 정보':
        return (
          <>
            <FormGroup>
              <Label>이름</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="이름을 입력하세요"
              />
            </FormGroup>
            <FormGroup>
              <Label>소개</Label>
              <TextArea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="자기소개를 입력하세요"
              />
            </FormGroup>
          </>
        );
      case '비밀번호':
        return (
          <>
            <FormGroup>
              <Label>현재 비밀번호</Label>
              <Input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                placeholder="현재 비밀번호를 입력하세요"
              />
            </FormGroup>
            <FormGroup>
              <Label>새 비밀번호</Label>
              <Input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="새 비밀번호를 입력하세요"
              />
            </FormGroup>
            <FormGroup>
              <Label>새 비밀번호 확인</Label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="새 비밀번호를 다시 입력하세요"
              />
            </FormGroup>
          </>
        );
      case '연락처':
        return (
          <>
            <FormGroup>
              <Label>이메일</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일 주소를 입력하세요"
              />
            </FormGroup>
            <FormGroup>
              <Label>휴대폰 번호</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="휴대폰 번호를 입력하세요"
              />
            </FormGroup>
          </>
        );
      case '언어 설정':
        return (
          <FormGroup>
            <Label>선호 언어</Label>
            <select
              value={formData.language}
              onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value }))}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
            </select>
          </FormGroup>
        );
      case '테마 설정':
        return (
          <FormGroup>
            <Label>테마</Label>
            <select
              value={formData.theme}
              onChange={(e) => setFormData(prev => ({ ...prev, theme: e.target.value }))}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            >
              <option value="light">라이트 모드</option>
              <option value="dark">다크 모드</option>
              <option value="system">시스템 설정</option>
            </select>
          </FormGroup>
        );
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <PageTitle>계정 설정</PageTitle>
      {sections.map((section, index) => (
        <Section
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <SectionTitle>{section.title}</SectionTitle>
          <Grid>
            {section.items.map((item) => (
              <Card
                key={item.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSettingClick(item.title)}
              >
                <CardIcon>{item.icon}</CardIcon>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </Grid>
        </Section>
      ))}

      <AnimatePresence>
        {selectedSetting && (
          <DialogOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <Dialog
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <DialogHeader>
                <DialogTitle>{selectedSetting}</DialogTitle>
                <CloseButton onClick={handleClose}>×</CloseButton>
              </DialogHeader>
              <DialogContent>
                {renderDialogContent()}
              </DialogContent>
              <ButtonGroup>
                <Button onClick={handleClose}>취소</Button>
                <Button variant="primary" onClick={handleSubmit}>저장</Button>
              </ButtonGroup>
            </Dialog>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default AccountSettings; 