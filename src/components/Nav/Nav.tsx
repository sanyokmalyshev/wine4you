import './Nav.scss';

function Nav() {
  return (
    <nav className="App__nav Nav">
      <div className="container Nav__links">
        <a href="/" className="link Nav__link">Home</a>
        <a href="/" className="link Nav__link">Catalogue</a>
        <a href="/" className="link Nav__link">Wines</a>
        <a href="/" className="link Nav__link">Champaigne</a>
      </div>
    </nav>
  );
}

export default Nav;
