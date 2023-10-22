import Logo from '../../assets/logo.svg'
import './header.styles.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <nav className='header__nav'>
          <div className='logo'>
            <img src={Logo} alt='' />
          </div>

          <ul className='header__nav__links'>
            <li className='link'>home</li>
            <li className='link'>about</li>
          </ul>
          <button className='header__nav__button'>contact us</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
