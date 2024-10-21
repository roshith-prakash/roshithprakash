import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { About, Contact, Gallery, GridBox, Landing, NotFound, Projects, SmartPower, ThoughtJournal, Quizzer, SmartSlide } from './pages';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Navbar } from './components';

function App() {
  return (
    <>

      <SpeedInsights />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/smartpower" element={<SmartPower />} />
          <Route path="/projects/gridbox" element={<GridBox />} />
          <Route path="/projects/gallery" element={<Gallery />} />
          <Route path="/projects/thoughtjournal" element={<ThoughtJournal />} />
          <Route path="/projects/quizzer" element={<Quizzer />} />
          <Route path="/projects/smartslide" element={<SmartSlide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
