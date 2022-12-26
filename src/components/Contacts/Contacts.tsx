import "./Contacts.scss"

export const Contacts = () => {
  return (
    <section className="Contacts">
      <h1 className="page__title Contacts__title">Contact us</h1>
      <p className="Contacts__text">Feel free to contact the locations</p>
      <div className="Contacts__info grid">
        <div className="Contacts__addresses grid__item--1-4">
          <h2 className="Contacts__city">Kyiv</h2>
          <div className="Contacts__address">
            <h3 className="Contacts__addressTitle">Shop on Podil</h3>
            <a href="tel: + 38 (096) 771 85 65" className="Contacts__addressData link">+ 38 (096) 771 85 65</a><br />
            <a href="mailto: winepodil@gmail.com"className="Contacts__addressData link">winepodil@gmail.com</a>
          </div>
          <div className="Contacts__address">
            <h3 className="Contacts__addressTitle">Shop on Osokorky</h3>
            <a href="tel: + 38 (096) 717 78 23" className="Contacts__addressData link">+ 38 (096) 717 78 23</a><br />
            <a href="mailto: winepodil@gmail.com"className="Contacts__addressData link">wineosokorky@gmail.com</a>
          </div>
          <div className="Contacts__address">
            <h3 className="Contacts__addressTitle">Shop on Shulyavka</h3>
            <a href="tel: + 38 (099) 787 72 22" className="Contacts__addressData link">+ 38 (099) 787 72 22</a><br />
            <a href="mailto: wineshulyavka@gmail.com"className="Contacts__addressData link">wineshulyavka@gmail.com</a>
          </div>
          <div className="Contacts__address">
            <h3 className="Contacts__addressTitle">Shop on Klovskay</h3>
            <a href="tel: +38 (050) 555 12 85" className="Contacts__addressData link">+38 (050) 555 12 85</a><br />
            <a href="mailto: winepodil@gmail.com"className="Contacts__addressData link">wineklovska@gmail.com</a>
          </div>
          <div className="Contacts__hours">
            <h2 className="Contacts__hoursTitle">Working hours</h2>
            <div className="Contacts__table">
              <div className="Contacts__days">
                <p className="Contacts__day">Mon-Fri</p>
                <p className="Contacts__day">Sat-Sun</p>
              </div>
              <div className="Contacts__days">
                <p className="Contacts__time">08 AM - 07 PM</p>
                <p className="Contacts__time">10 AM - 07 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Contacts__map grid__item--5-12">
          <iframe className="Contacts__iframe" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116594.44930910006!2d30.415563793983686!3d50.469767985770034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6f20e7438b%3A0xf01013acc3e6626c!2sPodil%20Plaza%20%26%20Residence!5e0!3m2!1suk!2sth!4v1671630848622!5m2!1suk!2sth" width="100%" height="100%" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  )
}