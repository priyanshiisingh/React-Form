import styled from "styled-components";

const Div = styled.div``;

const Link = styled.a`
  text-decoration: underline;
  font-size: medium;
  color: #579eee;
  font-weight: 400;
`;

const Para = styled.p`
  color: #7f838a;
`;

const FooterS = styled.footer`
  flex-direction: column;
  min-height: 260px;
  background-color: #edeef1;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
`;

export { Div, Link, Para, FooterS, Image };
