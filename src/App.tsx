import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Leaderboards from "./pages/Leaderboards/Leaderboards";
import ModelUN from "./pages/ModelUN/ModelUN";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/modelun" element={<ModelUN />} />
      </Routes>
    </Router>
  );
}

export default App;
