import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-banner.jpg';
import appStoreImg from '@/assets/app-store.png';
import playStoreImg from '@/assets/play-store.png';

const HeroSection = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  padding: 0 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const StoreButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const StoreButton = styled.a`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 48px;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection style={{backgroundImage: `url(${heroImage})`}}>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Weverse로<br />더 특별한 팬경험을
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          아티스트와 함께하는 새로운 방식
        </Subtitle>
        <StoreButtons
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <StoreButton href="#" className="store-btn">
            <img src={appStoreImg} alt="App Store" />
          </StoreButton>
          <StoreButton href="#" className="store-btn">
            <img src={playStoreImg} alt="Play Store" />
          </StoreButton>
        </StoreButtons>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
