import { NavLink } from 'react-router-dom'
import { BiDrink } from 'react-icons/bi'

import '../styles/Header.css'


const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <div className="header__logo__icon">
                <BiDrink />
            </div>
            <div className="header__logo__brand">React<br />Cocktail</div>
        </div>

        <nav className="header__nav">
            <NavLink to="/" className='header__nav__link'>Home</NavLink>
            <NavLink to="/about" className='header__nav__link'>About</NavLink>
            <NavLink to="/contact" className='header__nav__link'>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Header