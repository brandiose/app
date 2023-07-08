import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Intro from './pages/intro';
import Editor from './pages/editor';
import Brand from './pages/brand';
import Brands from './pages/brands';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
    </Router>
  );
}

export default App;
