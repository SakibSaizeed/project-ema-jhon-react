import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="home" element={<Shop />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="orderreview" element={<OrderReview />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
