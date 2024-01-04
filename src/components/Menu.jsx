import React from 'react'
import { Outlet, Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className='marco'>
        <div className='leftNavBar'>
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