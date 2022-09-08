import CartWidget from "./Card/CardWidget"
import React from "react"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <header class="NavBarJS">
  <nav>
  <h2>ZAPATILLAS OG</h2>
    <ul>
      <li>
        <NavLink to='/' >inicio</NavLink>
      </li>
      <li>
        <NavLink to='/categoria/nike' >nike</NavLink>
      </li>
      <li>
        <NavLink to='/categoria/adidas' >adidas</NavLink>
      </li>
      <li class="iconn">
      <CartWidget/>
      </li>
    </ul>
    
  </nav>
  
</header>
    )
}

export default NavBar