import React from "react";
import "./brand.css";

interface BrandProps {
  brand: any;
}

const Brand = ({ brand }: BrandProps) => {
  return (
    <div className="navBody">
      <nav className="brand-nav">
        <a href="#" className="nava">
          <img src={brand} alt="logo" className="logo" />
        </a>
      </nav>
    </div>
  );
};

export default Brand;
