/* function Footer(){
    return( 
        <footer class="footer"> 2022. Todos los derechos reservados ©. Hecho por Yasmin Reinhardt, Delfina Jimenez Herrera y Jazmin Lombardi
            <div>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-spotify"></i>
                <i className="fa-brands fa-apple"></i>
                <i className="fa-brands fa-amazon"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </footer>

    );
}

export default Footer */

// import React from 'react';
// import './Footer.css'

// function Footer() {
//   return (
//     <footer>
//       <p className='alumnos'>Equipo:</p>
//       <ul>
//         <li>Simone Bordelois</li>
//         <li>Jazmin Lombardi </li>
//         <li>Lucia Cupito</li>
//         {/* Agrega los nombres de los demás integrantes aquí */}
//       </ul>
//     </footer>
//   );
// }

// export default Footer;

import './Footer.css'
import React from 'react'

function Footer() {

  return(
      <footer className= 'footer'>
          <p className="alumnos">Lucia Cupito, Simone Bordelois , Jazmin Lombardi</p>
      </footer>
  )
}

export default Footer;