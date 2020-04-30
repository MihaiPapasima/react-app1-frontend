import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import SignIn from "./components/SignIn/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <SignIn />
      {/*
      <ImageLinkForm />
      <FaceRecognition />
      */}
    </div>
  );
}

export default App;
