import { Link } from 'react-router-dom'
import { BiDrink } from 'react-icons/bi'

import '../styles/Header.css'


const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <div className="header__logo__icon">
                <BiDrink />
            </div>
            <div className="header__logo__brand">React Cocktail</div>
        </div>

        <nav className="header__nav">
            <Link to="/" className='header__nav__link'>Home</Link>
            <Link to="/about" className='header__nav__link'>About</Link>
            <Link to="/contact" className='header__nav__link'>Contact</Link>
        </nav>
    </header>
  )
}

export default Header