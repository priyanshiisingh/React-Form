import styled from "styled-components";

const Option = styled.option`
  border: 1px solid #e2e2e2;
  background-color: #e2e2e2;
  border-radius: 3px;
  height: 40px;
  width: 500px;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
  padding: 4px 4px 4px 15px;
`;

const Select = styled.select`
  border: 1px solid #e2e2e2;
  background-color: #e2e2e2;
  border-radius: 3px;
  height: 40px;
  width: 500px;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
  padding: 4px 4px 4px 15px;

  @media (min-width: 768px) {
    margin-left: 10%;
  }
`;

export { Option, Select };
