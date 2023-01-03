import './Header.scss';
import 'scss/blocks/container.scss';
import 'scss/blocks/logo.scss';
import 'scss/blocks/grid.scss';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'components/Search/Search';
import logo from 'imgs/logo.svg';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="Header page__header">
      <div className="container grid">
        <div className="logo grid__item--1-1">
          <Link to="/" className="logo__link">
            <img src={logo} alt="" />
          </Link>
        </div>
        {(currentPath === '/catalogue'
        ) && (
          <Search />
        )}
        
        <div className="Header__pages grid__item--6-7">
          <Link to="catalogue" className="link">Sommelier</Link>
          <Link to="about" className="link">About</Link>
        </div>
        <div className="Header__phone grid__item--8-9">
          <a href="tel:+380967994200" className="link">
            <i 
              className="Header__phoneIcon icon"
            ></i>
            +380967994200
          </a>
        </div>
        <div className="Header__features grid__item--10-12">
          <Link to="favorites" className="link Header__iconLink">
            <i className="icon Header__icon Header__icon--favorites"></i>
            Favorites
          </Link>
          <Link to="auth" className="link Header__iconLink">
            <i className="icon Header__icon Header__icon--person"></i>
            Account
          </Link>
          <Link to="cart" className="link Header__iconLink">
            <i className="icon Header__icon Header__icon--cart"></i>
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;