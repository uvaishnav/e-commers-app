import React from "react";  
import { HeaderContainer, Branding, Logo, BrandName, Button } from "../../styles/Header.style";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <HeaderContainer>
      <Branding>
        <Logo src="../../public/logo192.png" alt="Logo" />
        <BrandName>Brand Name</BrandName>
      </Branding>
      <Button>
        <Link to="./login">Login</Link>
      </Button>
      </HeaderContainer>
    );
  };
  
export default Header;