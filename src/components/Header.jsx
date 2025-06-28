import logo from '../images/harry-potter.png'

function Header() {
  return (
    <header>
      <a href="./"><img src={logo} alt="Logo de Harry Potter" /></a>
    </header>
  )
}

export default Header