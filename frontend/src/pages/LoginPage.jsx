import React from 'react';
import '../styles/LoginPage.css'; 
import styled from 'styled-components';
import GoogleIcon from '../assets/google.svg';
import AppleIcon from '../assets/apple.svg';

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #EAC6B2;
`;

const ImageSection = styled.div`
  flex: 1;
  background-color: #3B0A0F;  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 0 0 12px;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #1A1A1A;
`;

const SubText = styled.p`
  font-size: 0.95rem;
  color: #3B0A0F;
  margin: 0.5rem 0 1.5rem;
`;

const Input = styled.input`
  padding: 0.9rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #F5D9C9;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #3B0A0F;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  background-color: #A5262D;
  color: #fff;
  border: none;
  padding: 0.9rem;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  text-align: center;
  margin: 1rem 0;
  color: #3B0A0F;
`;

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
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const LoginPage = () => {
  return (
    <LoginContainer>
      <ImageSection>
        {/*Add branding, logo, or carousel here */}
      </ImageSection>

      <FormSection>
        <Heading>Welcome Back!</Heading>
        <SubText>Don’t have an account? Register now</SubText>

        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Enter your password" />

        <CheckboxLabel>
          <input type="checkbox" style={{ marginRight: '8px' }} />
          I agree to the Terms & Conditions
        </CheckboxLabel>

        <Button>Log In</Button>

        <Divider>Or log in with</Divider>

        <div style={{ display: 'flex' }}>
          <OAuthButton>
            <Icon src={GoogleIcon} alt="Google" />
            Google
          </OAuthButton>

          <OAuthButton>
            <Icon src={AppleIcon} alt="Apple" />
            Apple
          </OAuthButton>
        </div>
      </FormSection>
    </LoginContainer>
  );
};

export default LoginPage;
