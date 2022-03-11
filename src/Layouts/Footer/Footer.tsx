import React from "react";
import "./footer.css";

interface FooterProps {
  homeLink: string;
  leverimg: any;
}

const Footer = ({ homeLink, leverimg }: FooterProps) => {
  return (
    <div className="footer">
      <h5>
        <a href={homeLink} className="homelink">
          Render Home Page
        </a>
      </h5>
      <p>
        Jobs powered by
        <img src={leverimg} alt="leverlogo" className="lLogo" />
      </p>
    </div>
  );
};

export default Footer;
