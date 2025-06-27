import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prototipo from './pages/prototipo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/proto" element={< Prototipo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
