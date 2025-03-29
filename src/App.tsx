import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

// import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;