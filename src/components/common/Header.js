import React from "react";  
import { HeaderContainer, Branding, Logo, BrandName, Button } from "../../styles/Header.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login"); 
  }
    return (
      <HeaderContainer>
      <Branding>
        <Logo src="../../public/logo192.png" alt="Logo" />
        <BrandName>Brand Name</BrandName>
      </Branding>
      <Button onClick={login}>Login</Button>
      </HeaderContainer>
    );
  };
  
export default Header;