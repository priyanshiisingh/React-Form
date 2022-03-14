import styled from "styled-components";

const OuterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 20px;
  min-height: 270px;
  background-color: white;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;
const InnerDiv = styled.div`
  width: 50%;
`;

export { OuterDiv, InnerDiv };
