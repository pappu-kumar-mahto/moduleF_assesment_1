import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from './Component/About/About'
import Book from './Component/Book/Book'
import Place from './Component/Place/Place'
import SinglePlace from './Component/Place/singlePlace'
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/places" element={<Place/>} />
          <Route path="/places/place/:id" element={<SinglePlace/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
