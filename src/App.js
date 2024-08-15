import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Jobs from './Pages/Jobs';
import Bookmarks from './Pages/Bookmarks';
import JobDetails from './Pages/JobDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
