import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/catalogo";
import Detalle from "./pages/Detalle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/producto/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;