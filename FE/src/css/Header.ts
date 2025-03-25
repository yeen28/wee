import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #666;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const IconButton = styled(motion.button)`
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

export const NotificationBadge = styled.div`
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

export const NotificationHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationDialogTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const NotificationItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const NotificationContent = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NotificationImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
`;

export const NotificationText = styled.div`
  flex: 1;
`;

export const NotificationTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
`;

export const NotificationMessage = styled.p`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
`;

export const NotificationTime = styled.span`
  font-size: 0.7rem;
  color: #999;
`;

export const SettingsDialog = styled(motion.div)`
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

export const SettingsHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const SettingsList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const SettingsItem = styled.div`
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

export const SettingsItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SettingsItemTitle = styled.span`
  font-size: 0.9rem;
  color: #333;
`;

export const SettingsItemIcon = styled.div`
  color: #666;
  display: flex;
  align-items: center;
`;

export const NotificationButtonContainer = styled.div`
  position: relative;
`;

export const SettingsButtonContainer = styled.div`
  position: relative;
`;

export const SearchDialog = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding-top: 80px;
`;

export const SearchContent = styled(motion.div)`
  background: white;
  width: 90%;
  max-width: 600px;
  border-radius: 16px;
  overflow: hidden;
`;

export const SearchHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #666;
  }
`;

export const SearchCloseButton = styled.button`
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

export const SearchBody = styled.div`
  padding: 1.5rem;
`;

export const SearchSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SearchSectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  margin-bottom: 1rem;
`;

export const RecentSearches = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SearchTag = styled.button`
  background: #f5f5f5;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #eee;
  }
`;

export const PopularSearches = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const PopularSearchItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  background: #f8f8f8;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;

  &:hover {
    background: #f0f0f0;
  }
`;

export const SearchRank = styled.span`
  font-weight: 600;
  color: #666;
  min-width: 24px;
`;

export const SearchText = styled.span`
  color: #333;
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
`;