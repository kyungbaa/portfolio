import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrap>
      <Nav>
        <Logo>로고</Logo>
        <Menus>
          <Menu>Project</Menu>
          <Menu>About</Menu>
          <Menu>Contact</Menu>
        </Menus>
      </Nav>
    </Wrap>
  );
};
const Wrap = styled.header`
  padding: 1.5rem 3rem;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div``;
const Menus = styled.ul`
  font-weight: 800;
  display: flex;
`;
const Menu = styled.li`
  margin-left: 1rem;
`;
export default Header;
