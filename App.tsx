import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/LayoutArea/Menu/Menu";
import Header from "./Components/LayoutArea/Header/Header";
import Main from "./Components/LayoutArea/Main/Main";
import Footer from "./Components/LayoutArea/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
