import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import { SecurityHeaders } from "./components";

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTopOnRoute />
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
    </>
  );
}

function App() {
  return (
    <>
      <SpeedInsights />
      <SecurityHeaders />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
