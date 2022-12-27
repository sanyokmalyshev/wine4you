import { createRef } from 'react';
import "./Search.scss";

export const Search = () => {
  const inputRef = createRef<HTMLInputElement>();

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
  <div className="Header__search Search grid__item--3-5">
    <i 
      className="Search__searchIcon icon"
      onClick={handleClick}
    ></i>
    <input 
      type="text" 
      className="Search__input"
      placeholder="Search"
      ref={inputRef}
    />
  </div>
  )
}