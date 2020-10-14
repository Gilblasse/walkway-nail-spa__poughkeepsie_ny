import React from 'react';
import { links } from './components/NavBar/links';
import Logo from './components/NavBar/Logo';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <NavBar logo={Logo} links={links} actionBtn="BOOK ONLINE"/>
    
  );
}

export default App;
