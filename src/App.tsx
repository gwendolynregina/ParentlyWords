import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Home } from './pages/Home';
import { Situation } from './pages/Situation';
import { Saved } from './pages/Saved';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/situation/:id" element={<Situation />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
