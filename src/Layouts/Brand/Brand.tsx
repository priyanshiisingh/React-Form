import React from "react";
import "./brand.css";

interface BrandProps {
  brand: any;
}

const Brand = ({ brand }: BrandProps) => {
  return (
    <div>
      <nav className="brand-nav">
        <img src={brand} alt="logo" className="logo" />
      </nav>
    </div>
  );
};

export default Brand;
