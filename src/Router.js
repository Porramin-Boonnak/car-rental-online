import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Selectcar from "./selectcar"
import List from "./list"
import Payment from "./Payment"
import Thx from "./Thx"
import Admin from "./admin";
import Login from "./login"
import Signup from "./signup"
import Status from "./status"
export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/selectcar" element={<Selectcar />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/Payment" element={<Payment />}/>
          <Route path="/Thx" element={<Thx />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/status" element={<Status />}/>
        </Routes>
      </BrowserRouter>
    );
  }