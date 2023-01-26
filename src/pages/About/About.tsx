import './About.scss';
import img1 from '../../imgs/aboutImgs/1.png';
import img2 from '../../imgs/aboutImgs/2.png';
import img3 from '../../imgs/aboutImgs/3.png';
import img4 from '../../imgs/aboutImgs/4.png';

const imgs = [img1, img2, img3, img4];

export const About = () => {
  return (
    <div className="About page__detailPage">
      <div className="container">
        <h1 className='About__title'>
          About page
        </h1>
        <div className="About__desc grid">
          <p className="About__text grid__item--2-11">Our company was established in 2007 by Yuriy Garmash. We work only with trusted brands that produce quality products. Our stores employ only qualified specialists who have passed the appropriate specialization of junior somilliers.</p>
          <p className="About__text grid__item--2-11">Mr. Garmash also has his own vineyards and occasionally sells his wines on the website and in physical stores. All information you can find by contacting our shop via E-mail or phone.</p>
        </div>
        <div className="About__imgs">
          {imgs.map(img => (
            <div className="About__imgCont" key={img}>
              <img src={img} className="About__img"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
