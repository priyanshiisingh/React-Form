import React from "react";
import "./App.css";
import BrandIndex from "./Layouts/Brand/BrandIndex";
import FooterIndex from "./Layouts/Footer/FooterIndex";
import Header from "./Layouts/Header/Header";
import InputFieldIndex from "./components/InputFields/InputFieldIndex";
import TextAreaIndex from "./components/TextArea/TextAreaIndex";
// import FormFormat from "./components/Form/FormFormat";

function App() {
  return (
    <div className="App">
      {/* <BrandIndex />
      <Header /> */}
      <InputFieldIndex />
      <TextAreaIndex />
      {/* <FormFormat /> */}
      {/* <FooterIndex /> */}
    </div>
  );
}

export default App;
