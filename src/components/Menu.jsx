import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import user from '../assets/img/imgUser/io.jpg'
const Menu = () => {
  return (
    <div className='marco'>
        <div className='leftNavBar'>
          <div className='buttonIcons'>
              <div className='rojo'>x</div>
              <div className='amarillo'>-</div>
              <div className='verde'> 
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
          menu
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/About'>About</Link>
                </li>
                <li>
                  <Link to='/Projects'>Projects</Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
        <Outlet />

        
    </div>
  )
}

export default Menu