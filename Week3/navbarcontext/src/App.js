import React from "react";
import ReactDOM from "react-dom";

import Wrapper from "./components/Wrapper";
import FormWrapper from "./components/FormWrapper";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <NavBar />
        <FormWrapper />
        </Wrapper>
    </div>
  );
}

export default App;
