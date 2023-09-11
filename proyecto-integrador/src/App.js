/* import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Footer/>
    </React.Fragment>
  );
}
export default App; */

import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';


function App() {
  return (
      <div>
        <Header />
        
        <h2>Peliculas Populares</h2>
        <Home/>
        <h2>Series Populares</h2>
        <Home/>

        <Footer />
      </div>
  );
}

export default App;
