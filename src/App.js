import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';


function App() {

  // const [ fruit, setFruit ] = useState(); 

  const [ menuIsOpen, setMenuIsOpen ] = useState(false); 

  function toggleMenuOpen() {
    setMenuIsOpen(!menuIsOpen)  
  }

  return (
    <div className="App">
      <header className="App-header">
        Fruit + hamburger. 
        <div className='hamburgerButton' onClick={toggleMenuOpen} />
      </header>
      {menuIsOpen && <HamburgerMenu />}      
    </div>
  );
}

export default App;
