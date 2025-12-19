import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Leaderboards from "./pages/Leaderboards/Leaderboards";
import ModelUN from "./pages/ModelUN/ModelUN";
import Committee from "./pages/Committee/Committee";
import CommitteesList from "./pages/CommitteesList/CommitteesList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/modelun" element={<ModelUN />} />
        <Route path="/modelun/committees" element={<CommitteesList />} />
        <Route path="/modelun/committees/:committeeId" element={<Committee />} />
      </Routes>
    </Router>
  );
}

export default App;
