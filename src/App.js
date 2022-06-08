import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erreur from "./pages/Erreur";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
