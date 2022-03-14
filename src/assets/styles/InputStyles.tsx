import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  height: 40px;
  margin-right:10%;
  width:500px;
  font-size: 16px;
    line-height: 1.4;
    color: #515357
  padding: 4px 4px 4px 15px;
`;

const Label = styled.label`
  text-align: flex-start;
  font-size: 16px;
  line-height: 1.4;
  margin: 17.5px 0;
  color: #515357;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  align-items: baseline;
`;

export { Input, Label, Div };
