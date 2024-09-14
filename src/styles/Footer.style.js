import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialMediaIcons = styled.div`
  margin-top: 10px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
  }
`;
