import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
export default function router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    );
  }