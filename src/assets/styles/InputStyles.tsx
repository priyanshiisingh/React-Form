import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  height: 40px;
  margin-left: 10%;
  width: 500px;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
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
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
  align-items: baseline;
`;

const Form = styled.form`
  justify-content: center;
  display: flex;
  align-items: center;
`;

export { Input, Label, Div, Form };
