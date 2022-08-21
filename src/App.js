import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from './Component/About/About'
import Book from './Component/Book/Book'
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/book" element={<Book/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
