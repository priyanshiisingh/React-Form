import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: white;
  position: fixed;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const Nav = styled.nav`
  width: 50%;
`;

const Link = styled.a`
  display: inline-block;
  margin: 17.5px 0;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
`;

const Image = styled.img`
  height: 77px;
`;

export { Div, Nav, Link, Image };
