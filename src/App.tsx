import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommonHead from "./components/CommonHead/CommonHead";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Leaderboards from "./pages/Leaderboards/Leaderboards";
import ModelUN from "./pages/ModelUN/ModelUN";
import Committee from "./pages/Committee/Committee";
import CommitteesList from "./pages/CommitteesList/CommitteesList";
import ResourcesList from "./pages/ResourcesList/ResourcesList";
import Resource from "./pages/Resource/Resource";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import NotFound from "./pages/NotFound/NotFound";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Donate from "./pages/Donate/Donate";
import Grants from "./pages/Grants/Grants";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <Router>
      {/* Common head content for all pages - page-specific head will override */}
      <CommonHead />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/mocktrial" element={<ComingSoon />} />
        <Route path="/mathletes" element={<ComingSoon />} />
        <Route path="/modelun" element={<ModelUN />} />
        <Route path="/modelun/committees" element={<CommitteesList />} />
        <Route path="/modelun/committees/:committeeId" element={<Committee />} />
        <Route path="/modelun/resources" element={<ResourcesList />} />
        <Route path="/modelun/resources/:resourceId" element={<Resource />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
