import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from 'imgs/logo.svg';

export const Footer = () => {
  const logoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="Footer">
      <div className="container grid">
        <div className="grid__item--1-2">
          <div className="logo">
            <Link to="/" className="logo__link" onClick={logoClick}>
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="grid__item--3-5">
          <div className="Footer__contacts">
            <h3 className="Footer__contactsTitle">Contacts</h3>
            <a href="tel: +380967994200" className="Footer__contactsData link">+380967994200</a><br />
            <a href="tel: +380503862215" className="Footer__contactsData link">+380503862215</a><br />
            <a href="mailto: wineforyou@gmail.com"className="Footer__contactsData link">thisiswineforyou@gmail.com</a>
          </div>
        </div>
        <div className="grid__item--7-8">
          <h3 className="Footer__contactsTitle Footer__more">More info</h3>
          <div className="Footer__contacts">
            <Link
              to="/locations"
              className="link Footer__contactsData"
            >
              Our locations
            </Link><br />
            <Link to="/about" className="link Footer__contactsData">About us</Link>
          </div>
        </div>
        <div className="grid__item--10-12">
          <h3 className="Footer__contactsTitle Footer__media">Our social media</h3>
          <div className="Footer__icons">
            <a
              href="https://www.instagram.com/thiswine4you/"
              className="Footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon Footer__icon--inst"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/thisiswineforyou/about/?viewAsMember=true"
              className="Footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon Footer__icon--lnkdn"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089206488230&is_tour_dismissed=true"
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
