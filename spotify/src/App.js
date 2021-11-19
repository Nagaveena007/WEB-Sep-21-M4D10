import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import FooterPart from "./components/FooterPart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <FooterPart />
      </div>
    </BrowserRouter>
  );
}

export default App;
