import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { About, Contact, Gallery, GridBox, Landing, NotFound, Projects, SmartPower, ThoughtJournal } from './pages';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <SpeedInsights />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/smartpower" element={<SmartPower />} />
          <Route path="/projects/gridbox" element={<GridBox />} />
          <Route path="/projects/gallery" element={<Gallery />} />
          <Route path="/projects/thoughtjournal" element={<ThoughtJournal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
