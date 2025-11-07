import React from 'react';
import { useState } from 'react';

import Navbar from './Components/Navbar.jsx';
import NewsBoard from './Components/NewsBoard.jsx';

import './App.css';

function App() {
  
  const [category, setCategory] = useState('general');

  return (
    <div>

      <Navbar 
        setCategory={setCategory}
      />

      <NewsBoard 
        category={category}
      />

    </div>
  )
}

export default App;