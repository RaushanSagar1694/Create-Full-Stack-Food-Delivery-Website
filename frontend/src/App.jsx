

import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/pages/Home/Home";
import Cart from "./Components/pages/Card/Card";
import PlaceOrder from "./Components/pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
      <>
      <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
      </>
  )
}

export default App
