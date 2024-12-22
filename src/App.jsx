import React from "react";
import "./App.css";
import image from "./assets/monitor.svg";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Home />
      </main>

      <Footer />
    </>
  );
};

export default App;
