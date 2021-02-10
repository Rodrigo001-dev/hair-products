import styled, { css } from 'styled-components';

import { 
  FaCross, 
  FaHashtag, 
  FaSearch, 
  FaUser, 
  FaPiggyBank 
} from 'react-icons/fa';

export const Menu = styled.header`
  position: fixed;
  
  width: 100%;

  background-color: var(--color-blue);
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  margin: 0 220px;
  min-height: 61px;

  @media(max-width: 800px) {
    margin: 0;
  }

  > h2 {
    display: flex;
    align-items: center;
    > span {
      color: var(--color-white);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > h2:nth-child(2) {
    cursor: pointer;

    > span {
      font-size: 16px;
      font-weight: 500;
      margin-left: 2px;
    }
  }

  > h2:nth-child(4) {
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }

      transition: 0.8s;

    > span {
      font-size: 16px;
      font-weight: 600;
      margin-left: 5px;
    }
  }
`;

export const Input = styled.input`
  height: 38px;
  width: 500px;
  
  padding-left: 8px;

  background: var(--color-background);
  color: #000;

  outline: 0;

  font-size: 18px;
  font-weight: 400;

  border-radius: 7px 0 0 7px;
  border: none;
`;

const generalIconCSS = css`
  width: 24px;
  height: 20px;

  flex-shrink: 0;

  fill: var(--color-white);
`;

export const CrossIcon = styled(FaCross)`
  width: 36px;
  height: 32px;

  flex-shrink: 0;

  fill: var(--color-white);
`;

export const HashtagIcon = styled(FaHashtag)`${generalIconCSS}`;

export const SearchIcon = styled(FaSearch)`
  height: 37px;
  width: 34px;

  padding-right: 10px;

  fill: var(--color-gray);
  
  margin-top: 6px;

  border: none; 
  border-radius: 0 7px 7px 0;
  background: var(--color-background);

  outline: 0;
  
  cursor: pointer;
  float: left;
`;

export const UserIcon = styled(FaUser)`
${generalIconCSS}
  
  width: 30px !important;
  height: 26px !important;

  background: var(--color-gray);

  border-radius: 50%;
`;

export const PigIcon = styled(FaPiggyBank)`
  ${generalIconCSS}

  fill: var(--color-blue-light) !important;
  cursor: pointer;
`;

