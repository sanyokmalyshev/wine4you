import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container grid">
        <div className="grid__item--1-2">
          <h1 className="logo Footer__logo">
            <a href="/" className="logo__link">
              Wine4you
            </a>
          </h1>
          <div className="Footer__contacts">
            <h3 className="Footer__contactsTitle">Contacts</h3>
            <a href="tel: +380967994200" className="Footer__contactsData link">+380967994200</a><br />
            <a href="mailto: wineforyou@gmail.com"className="Footer__contactsData link">wineforyou@gmail.com</a>
          </div>
        </div>
        <div className="grid__item--6-8">
          <h3 className="Footer__contactsTitle Footer__more">More info</h3>
          <div className="Footer__contacts">
            <a href="/" className="link Footer__contactsData">Our locations</a><br />
            <a href="/" className="link Footer__contactsData">About us</a><br />
            <a href="/" className="link Footer__contactsData">Privacy policy</a><br />
          </div>
        </div>
        <div className="grid__item--10-12">
          <h3 className="Footer__contactsTitle Footer__media">Our social media</h3>
          <div className="Footer__icons">
            <a
              href="https://www.google.com"
              className="Footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon Footer__icon--inst"></i>
            </a>
            <a
              href="https://www.google.com"
              className="Footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon Footer__icon--lnkdn"></i>
            </a>
            <a
              href="https://www.google.com"
              className="Footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon Footer__icon--fb"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
