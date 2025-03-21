import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = styled(motion.section)`
  background-color: #f8f8f8;
  padding: 8rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <FeaturesSection
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <FeatureCard variants={itemVariants}>
        <FeatureIcon>🌟</FeatureIcon>
        <FeatureTitle>아티스트 독점 콘텐츠</FeatureTitle>
        <FeatureDescription>Weverse에서만 만날 수 있는 특별한 순간</FeatureDescription>
      </FeatureCard>
      <FeatureCard variants={itemVariants}>
        <FeatureIcon>💝</FeatureIcon>
        <FeatureTitle>팬커뮤니티</FeatureTitle>
        <FeatureDescription>전세계 팬들과 함께하는 이야기</FeatureDescription>
      </FeatureCard>
      <FeatureCard variants={itemVariants}>
        <FeatureIcon>🎁</FeatureIcon>
        <FeatureTitle>멤버십 혜택</FeatureTitle>
        <FeatureDescription>프리미엄 콘텐츠와 특별한 혜택</FeatureDescription>
      </FeatureCard>
    </FeaturesSection>
  );
};

export default Features;