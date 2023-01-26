import './Header.scss';
import 'scss/blocks/container.scss';
import 'scss/blocks/logo.scss';
import 'scss/blocks/grid.scss';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'components/Search/Search';
import logo from 'imgs/logo.svg';
import { useAppSelector } from 'app/hooks';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const cartProducts = useAppSelector((state) => state.cart.products);
  const favProducts = useAppSelector((state) => state.favorites.products);

  return (
    <header className="container Header page__header">
      <div className="container Header__content">
        <div className="logo">
          <Link to="/" className="logo__link">
            <img src={logo} alt="" />
          </Link>
        </div>
        {(currentPath === '/catalogue'
        ) && (
          <Search />
        )}

        <nav className='Header__nav'>
          <div className="Header__pages">
            <Link to="/catalogue" className="link">Sommelier</Link>
            <Link to="/about" className="link">About</Link>
            <div className="Header__phone">
              <a href="tel:+380967994200" className="link">
                <i
                  className="Header__phoneIcon icon"
                ></i>
                +380967994200
              </a>
            </div>
          </div>
          <div className="Header__features">
            <Link to="/favorites" className="link Header__iconLink">
              <i className="icon Header__icon Header__icon--favorites"></i>
              {favProducts.length > 0 && (
                <span
                  className="Header__countItems Header__countItems--fav"
                >
                  {favProducts.length}
                </span>
              )}
            </Link>
            {/* <Link to="/auth" className="link Header__iconLink">
              <i className="icon Header__icon Header__icon--person"></i>
              Account
            </Link> */}
            <Link to="/cart" className="link Header__iconLink">
              <i className="icon Header__icon Header__icon--cart"></i>
              {cartProducts.length > 0 && (
                <span className="Header__countItems">
                  {cartProducts.length}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
