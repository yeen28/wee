import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import artistImg1 from '@/assets/artist1.jpg';
import artistImg2 from '@/assets/artist2.jpg';
import artistImg3 from '@/assets/artist3.jpg';

const ArtistsSection = styled.section`
  padding: 8rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 4rem;
  color: #333;
`;

const ArtistGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ArtistCard = styled(motion.div)`
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ArtistName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-top: 1rem;
`;

const Artists: React.FC = () => {
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
    <ArtistsSection>
      <SectionTitle
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        인기 아티스트
      </SectionTitle>
      <ArtistGrid
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <ArtistCard variants={itemVariants}>
          <ArtistImage src={artistImg1} alt="Artist 1" />
          <ArtistName>BTS</ArtistName>
        </ArtistCard>
        <ArtistCard variants={itemVariants}>
          <ArtistImage src={artistImg2} alt="Artist 2" />
          <ArtistName>SEVENTEEN</ArtistName>
        </ArtistCard>
        <ArtistCard variants={itemVariants}>
          <ArtistImage src={artistImg3} alt="Artist 3" />
          <ArtistName>LE SSERAFIM</ArtistName>
        </ArtistCard>
      </ArtistGrid>
    </ArtistsSection>
  );
};

export default Artists;
