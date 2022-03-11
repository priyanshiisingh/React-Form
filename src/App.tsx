import React from "react";
import "./App.css";
import BrandIndex from "./Layouts/Brand/BrandIndex";
import FooterIndex from "./Layouts/Footer/FooterIndex";
import Header from "./Layouts/Header/Header";
import InputFieldIndex from "./components/InputFields/InputFieldIndex";
import TextAreaIndex from "./components/TextArea/TextAreaIndex";

function App() {
  return (
    <div className="App">
      {/* <BrandIndex />
      <Header /> */}
      <InputFieldIndex />
      <TextAreaIndex />
      {/* <FooterIndex /> */}
    </div>
  );
}

export default App;
