import React from "react";
import { OuterDiv, InnerDiv } from "../../assets/styles/HeaderStyles";

const Header = () => {
  return (
    <OuterDiv className="hmain">
      <InnerDiv>
        <h2>Full-Stack Engineer</h2>
        <div className="subText">
          REMOTE OR SF BAY AREA/PRODUCT – ENGINEERING /FULL-TIME
        </div>
      </InnerDiv>
    </OuterDiv>
  );
};

export default Header;
