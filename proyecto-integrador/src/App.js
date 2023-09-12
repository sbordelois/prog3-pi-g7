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

// import React from 'react';
// import Header from './components/Header/Header.js';
// import Footer from './components/Footer/Footer.js';
// import Home from './components/Home/Home.js';


// function App() {
//   return (
//       <div>
//         <Header />
        
//         <h2>Peliculas Populares</h2>
//         <Home/>
//         <h2>Series Populares</h2>
//         <Home/>

//         <Footer />
//       </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Favoritos from './pages/Favoritos/Favoritos';
import DetallePelicula from './pages/DetallePelicula/DetallePelicula';
import VerTodasP from './pages/VerTodasP/VerTodasP';
import VerTodasA from './pages/VerTodasA/VerTodasA';

function App() {
  return (
    <Router> 
       <>
       <Header titulo="La Matanza" subtitulo="Multimedia"/>        
       <Routes>
          <Route path="/" exact  >
            <Home />
          </Route>
          <Route path="/favoritos" component={Favoritos}/> 
          <Route path="/detallePelicula/id/:id" component={DetallePelicula}/> 
          <Route path="/pelicula/VerTodasP" component={VerTodasP}/> 
          <Route path="/pelicula/VerTodasA" component={VerTodasA}/> 
          <Route component={NotFound}/>
        </Routes>
        
      <Footer/> 
         </>
    </Router>
   );   
}
export default App;
