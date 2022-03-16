import styled from "styled-components";

const OuterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 120px 30px 20px 30px;
  min-height: 270px;
  background-color: white;

  @media (min-width: 800px) {
    justify-content: center;
  }
`;
const InnerDiv = styled.div`
  width: 50%;
`;

const Heading = styled.h2`
  margin: 17.5px 0;
  font-weight: 400;
  font-size: 36px;
  color: #515357;
  text-transform: none;
  letter-spacing: 0px;
`;

const SubHeading = styled.div`
  font-size: 14px;
  color: #808080;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export { OuterDiv, InnerDiv, Heading, SubHeading };
