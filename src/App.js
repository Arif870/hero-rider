import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Learner from "./Components/Learner/Learner";
import Rider from "./Components/Rider/Rider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rider" element={<Rider />} />
          <Route path="/learner" element={<Learner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
