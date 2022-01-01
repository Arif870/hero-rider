import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import Learner from "./Components/Learner/Learner";
import LearnerProfile from "./Components/LearnerProfile/LearnerProfile";
import Rider from "./Components/Rider/Rider";
import RiderProfile from "./Components/RiderProfile/RiderProfile";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rider" element={<Rider />} />
            <Route path="/learner" element={<Learner />} />
            <Route path="/riderprofile" element={<RiderProfile />} />
            <Route path="/learnerprofile" element={<LearnerProfile />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
