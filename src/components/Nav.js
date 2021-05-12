import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <h2>
            <span>Lyric</span>Finder
          </h2>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(30, 144, 255);
  color: white;
  ul {
    list-style: none;
  }
  span {
    color: orange;
  }
`;

export default Nav;
