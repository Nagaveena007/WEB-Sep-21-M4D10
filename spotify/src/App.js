import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FooterPart from "./components/FooterPart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        <FooterPart />
      </div>
    </BrowserRouter>
  );
}

export default App;
