import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 4rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

const FooterInfo = styled.div`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
`;

const Copyright = styled.p`
  color: #999;
  font-size: 0.9rem;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="#">회사소개</FooterLink>
          <FooterLink href="#">이용약관</FooterLink>
          <FooterLink href="#">개인정보처리방침</FooterLink>
          <FooterLink href="#">청소년보호정책</FooterLink>
          <FooterLink href="#">공지사항</FooterLink>
          <FooterLink href="#">고객센터</FooterLink>
        </FooterLinks>
        <FooterInfo>
          <FooterText>위버스컴퍼니 사업자등록번호 000-00-00000</FooterText>
          <FooterText>대표이사: 홍길동</FooterText>
          <FooterText>주소: 서울특별시 강남구 테헤란로 000</FooterText>
        </FooterInfo>
        <Copyright>© 2024 Weverse Company Inc. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
