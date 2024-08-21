import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  // Example character data
  const characters = [
    { id: '1', name: 'Spider-Man', thumbnail: 'https://path-to-image/spider-man.jpg' },
    { id: '2', name: 'Iron Man', thumbnail: 'https://path-to-image/iron-man.jpg' }
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/browse-characters" className="nav-link">Browse Characters</NavLink>
        <NavLink to="/comics" className="nav-link">Comics</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="browse-characters" element={<BrowseCharacters characters={characters} />} />
          <Route path="characters/:id" element={<CharacterDetails />} />
          <Route path="comics" element={<Comics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
