import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Selectcar from "./selectcar"
export default function router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/selectcar" element={<Selectcar />}/>
        </Routes>
      </BrowserRouter>
    );
  }