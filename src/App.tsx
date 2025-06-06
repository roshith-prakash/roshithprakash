import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Gallery,
  GridBox,
  Landing,
  NotFound,
  Projects,
  SmartPower,
  ThoughtJournal,
  Quizzer,
  SmartSlide,
  MusicPlayer,
  ReUseIt,
  GridManager,
} from "./pages";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Footer, Navbar, SecurityHeaders } from "./components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // AOS Setting
  useEffect(() => {
    Aos.init({
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <SpeedInsights />
      <SecurityHeaders />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/smartpower" element={<SmartPower />} />
          <Route path="/projects/gridbox" element={<GridBox />} />
          <Route path="/projects/clarivis" element={<Gallery />} />
          <Route path="/projects/thoughtjournal" element={<ThoughtJournal />} />
          <Route path="/projects/quizzer" element={<Quizzer />} />
          <Route path="/projects/smartslide" element={<SmartSlide />} />
          <Route path="/projects/musicplayer" element={<MusicPlayer />} />
          <Route path="/projects/re-use-it" element={<ReUseIt />} />
          <Route path="/projects/gridmanager" element={<GridManager />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="dark:bg-darkbg pt-20">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
