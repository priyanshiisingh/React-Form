import styled from "styled-components";

const Option = styled.option`
  border: 1px solid #e2e2e2;
  background-color: #c0c0c0;
  border-radius: 3px;
  height: 40px;
  width: 500px;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
  padding: 4px 4px 4px 15px;
`;

const SVG = styled.svg`
  fill: #737578;
  width: 16px;
  margin-left: 6px;
  height: 16px;
`;

const Select = styled.select`
  border: 1px solid #e2e2e2;
  background-color: #e2e2e2;
  border-radius: 3px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  line-height: 1.4;
  color: #515357;
  padding: 4px 4px 4px 15px;
  background: #e2e2e2
    url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='26' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='grey'/></g></svg>")
    no-repeat;
  background-position: right 5px top 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    background-color: #c0c0c0;
  }
`;

export { Option, Select, SVG };
