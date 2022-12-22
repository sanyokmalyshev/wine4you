import './Welcome.scss';
import mainImg from 'imgs/home_img.jpg';

function Welcome() {
  return (
    <section className="Welcome page__section grid">
      <div className="Welcome__imgContainer grid__item--1-6">
        <img src={mainImg} alt="Wines"  className="Welcome__img"/>
      </div>
      <div className="Welcome__description grid__item--7-12">
        <h1 className="Welcome__title">Welcome!</h1>
        <p className="Welcome__text">
          My name is Yuriy Garmash, I've been working as a sommelier since year 1996. I'm the owner of 4 wine shops in Kyiv.
          <br /><br />
          I'm here to help you to find the most perfect wine for any occasion in your life.
        </p>
        <div className="grid">
          <button type="button" className="button grid__item--1-8">
            Show me more items
          </button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
