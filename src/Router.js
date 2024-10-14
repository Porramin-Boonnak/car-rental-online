import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Selectcar from "./selectcar"
import List from "./list"
import Payment from "./Payment"
export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/selectcar" element={<Selectcar />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/Payment" element={<Payment />}/>
        </Routes>
      </BrowserRouter>
    );
  }