import CartWidget from "./Card/CardWidget"
const NavBar = () => {
    return ( 
        <header class="NavBarJS">
  <nav>
  <h2>Dermatologia</h2>
    <ul>
      <li>
        <a href="https://github.com/alvarez8037/ReactJs">inicio</a>
      </li>
      <li>
        <a href="https://github.com/alvarez8037/ReactJs">servicios</a>
      </li>
      <li>
        <a href="https://github.com/alvarez8037/ReactJs">contacto</a>
      </li>
      <li>
        <a href="https://github.com/alvarez8037/ReactJs">tienda</a>
      </li>
      <li>
        <a href="https://github.com/alvarez8037/ReactJs">galeria</a>
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