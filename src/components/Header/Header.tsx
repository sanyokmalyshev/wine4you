import './Header.scss';
import 'scss/blocks/container.scss';
import 'scss/blocks/logo.scss';
import 'scss/blocks/grid.scss';
// import { createRef } from 'react';

const Header = () => {
  // const inputRef = createRef<HTMLInputElement>();

  // const handleClick = () => {
  //   inputRef.current?.focus();
  // };

  return (
    <header className="Header page__header">
      <div className="container grid">
        <h1 className="logo grid__item--1-2">
          <a href="/" className="logo__link">
            Wine4you
          </a>
        </h1>
        {/* <div className="Header__search grid__item--3-5">
          <i 
            className="Header__searchIcon icon"
            onClick={handleClick}
          ></i>
          <input 
            type="text" 
            className="Header__input"
            placeholder="Search"
            ref={inputRef}
          />
        </div> */}
        <div className="Header__pages grid__item--6-7">
          <a href="/" className="link">Sommelier</a>
          <a href="/" className="link">About</a>
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
          <a href="/" className="link Header__iconLink">
            <i className="icon Header__icon Header__icon--favorites"></i>
            Favorites
          </a>
          <a href="/" className="link Header__iconLink">
            <i className="icon Header__icon Header__icon--person"></i>
            Log In
          </a>
          <a href="/" className="link Header__iconLink">
            <i className="icon Header__icon Header__icon--cart"></i>
            Cart
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;