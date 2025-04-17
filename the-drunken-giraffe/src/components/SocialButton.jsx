import React from 'react';
import styled from 'styled-components';

const OAuthButton = styled.button`
  background-color: #F5D9C9;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  margin-right: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.95rem;
  color: #3B0A0F;
`;

const SocialButton = ({ Icon, label, onClick }) => {
  return (
    <OAuthButton onClick={onClick}>
      <Icon style={{ width: '20px', height: '20px' }} />
      {label}
    </OAuthButton>
  );
};

export default SocialButton;
