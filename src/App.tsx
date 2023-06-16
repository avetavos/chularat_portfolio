import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  useNavigate ,
} from "react-router-dom";
import { Header } from './components';
import { About, Contact, Resume, Work } from './pages';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/about')
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
