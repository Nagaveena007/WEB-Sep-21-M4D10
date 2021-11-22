import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Homepage/Home";
import Player from "./components/Player/Player";
import Sidebar from "./components/Sidebar/Sidebar";
import AlbumPage from "./views/AlbumPage/AlbumPage";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Player />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<AlbumPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
