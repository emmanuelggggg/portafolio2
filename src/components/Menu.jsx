import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import user from '../assets/img/imgUser/io.jpg'
import '../assets/css/menu.css';

const Menu = () => {
  const handleFullscreen = () => {
    const element = document.documentElement; // Elemento a poner en pantalla completa

    if (document.fullscreenElement) {
      // Si ya está en pantalla completa, salir de pantalla completa
      document.exitFullscreen();
    } else {
      // Si no está en pantalla completa, activar pantalla completa
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { // Chrome, Safari, y Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // Internet Explorer/Edge
        element.msRequestFullscreen();
      }
    }
  };
  return (
    <div className='marco'>
        <div className='leftNavBar'>
          <div className='buttonIcons'>
              <div className='rojo'>x</div>
              <div className='amarillo'>-</div>
              <div className='verde' onClick={handleFullscreen}> 
                <div className='v1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" fill="currentColor" class="bi bi-triangle-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/>
                  </svg>
                </div>
                <div className='v2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" fill="currentColor" class="bi bi-triangle-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/>
                  </svg>
                </div>
              </div>
          </div>

          {/* buscador*/}
          <div className='buscador'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search lupa" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input  type="text" placeholder="Buscar" />            
          </div>

          {/* perfil*/}
          <Link to='/' className='link-perfil'>
            <div className='perfil'>
              <div className=''>
                <img  className='foto' src={user} alt="" />
              </div>
              <div className='nameUser'>
                {/*prop aqui*/}
                <p>Jesus Emmanuel C.</p>
                <span>Apple ID</span>
              </div>
            </div>  
          </Link>
          
          <div>
            <nav>
              <div className='menu'>
                <div className='menu-control'>
                    <div className='menu-icon1'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                      </svg>
                    </div>
                  <Link className='menu-item' to='/'>
                    Home
                  </Link>
                </div>
                <div className='menu-control'>
                    <div className='menu-icon2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
                      </svg>
                    </div>  
                  <Link className='menu-item' to='/About'>
                    About
                  </Link>
                </div>
                <div className='menu-control'>
                    <div className='menu-icon3'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-file-earmark-code" viewBox="0 0 16 16">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                        <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/>
                      </svg>
                    </div>
                  <Link className='menu-item' to='/Projects'>
                    Systems
                  </Link>
                </div>
                <div className='menu-control ulti ' >
                    <div className='menu-icon4'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-brush-fill" viewBox="0 0 16 16">
                        <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04"/>
                      </svg>
                    </div>  
                  <Link className='menu-item' to='/Designs'>
                    Designs
                  </Link>
                </div>
                <div className='menu-control' >
                    <div className='menu-icon5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="white" class="bi bi-camera2" viewBox="0 0 16 16">
                        <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4"/>
                        <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0"/>
                      </svg>
                    </div>  
                  <Link className='menu-item' to='/Photographs'>
                    Photographs
                  </Link>
                </div>
              </div>
            </nav>

          </div>
        </div>
        <Outlet />

        
    </div>
  )
}

export default Menu