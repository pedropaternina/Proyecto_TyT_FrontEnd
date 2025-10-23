import React from 'react'
import { navLink } from '../constants'

function NavBar() {
  return (
    <header>
      <nav>
          <img 
            src="/logo.svg" 
            alt="Logo App"
            className="w-32 h-auto" 
          />         
          <ul>
              {
                navLink.map(({label}) => (
                  <li key={label}>
                      <a href={label}>{label}</a>
                  </li>
                ))
              }
          </ul>
      
          <div className="flex-center gap-3">
              <button>
                  <a href='/Login'><img  src="/user_icon.svg" alt="User Icon"></img></a>
              </button>
          </div>
      </nav>
    </header>
  )
}

export default NavBar
