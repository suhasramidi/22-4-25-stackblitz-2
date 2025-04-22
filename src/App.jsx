import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MovieCard from './components/MovieCard'; // Ensure correct path
import AddMovieForm from './components/AddMovieForm'; // Import the new component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-movie" element={<AddMovieForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;