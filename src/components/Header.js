import React from "react";
import styled from "styled-components";
import Navs from "./Nav";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      
<Navs />
      <UserImage src="/images/user-image.jpg" />
      
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`

  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`

const Logo = styled.img`
  width: 80px;
`



const UserImage = styled.img`
border-radius: 50%;
width: 50px;
height: 47px;
cursor: pointer;
`