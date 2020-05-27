import React from "react";
import Navigation from "./components/Navigation";
import Router from "./Router";
import "@brainhubeu/react-carousel/lib/style.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
