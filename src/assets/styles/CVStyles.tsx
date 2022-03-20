import styled from "styled-components";

const CVDiv = styled.div`
  width: 30%;
  height: fit-content;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const CVInput = styled.input`
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  height: 0;
  width: 0;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
`;

const CVLabel = styled.label`
  border: 1px solid #e2e2e2;
  letter-spacing: 2px;
  border-radius: 3px;
  height: 40px;
  background-color: #e2e2e2;
  font-size: 14px;
  line-height: 1.4;
  color: #737578;
  padding: 10px 15px;
`;

const CVsvg = styled.svg`
  fill: #9696a2;
  margin-right: 5px;
`;

export { CVInput, CVLabel, CVsvg, CVDiv };
