import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { About, Contact, Gallery, GridBox, Landing, NotFound, Projects, SmartPower } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/smartpower" element={<SmartPower />} />
        <Route path="/projects/gridbox" element={<GridBox />} />
        <Route path="/projects/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
