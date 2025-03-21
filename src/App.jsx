import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SecondHand from "./pages/SecondHand";
import World from "./pages/World";
import Akademie from "./pages/Akademie";
import Customer from "./pages/Customer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/second-hand" element={<SecondHand />} />
        <Route path="/world" element={<World />} />
        <Route path="/akademie" element={<Akademie />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
