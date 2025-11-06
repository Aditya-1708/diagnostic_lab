import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import DoctorsConsultation from "./pages/DoctorsConsultation";
import DeliveryPickup from "./pages/DeliveryPickup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/docconsul" element={<DoctorsConsultation />}></Route>
          <Route path="/dp" element={<DeliveryPickup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
