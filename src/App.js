import React from "react";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import Modal from "./Components/Modal";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <div className="modal">
        <Modal />
      </div>
      <Footer />
    </div>
  );
};

export default App;
