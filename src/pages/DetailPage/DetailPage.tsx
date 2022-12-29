import classNames from "classnames";
import "./DetailPage.scss";

export const DetailPage = () => {
  return (
    <div className="DetailPage page__detailPage grid">
      <div className="DetailPage__imgContainer grid__item--1-5">
        <img 
          src={process.env.PUBLIC_URL+"/images/home_img.jpg"}  
          alt="" 
          className="DetailPage__img"
        />
      </div>
      <section className="DetailPage__description grid__item--7-12">
        <h1 className="DetailPage__title">
          Name of wine/champagne
        </h1>
        <div className="DetailPage__perfectFor">
          <p className="DetailPage__perfectTitle">Perfect for:</p>
          <div className="DetailPage__buttons">
            <button type="button" className="button DetailPage__button">Birthday</button>
            <button type="button" className="button DetailPage__button">New Year</button>
          </div>
        </div>
        <div className="DetailPage__buyButtons">
          <button className="DetailPage__buyButton button">
            Buy
          </button>
          <i 
            className={classNames(
              'DetailPage__icon',
              'icon'
            )}
          ></i>
        </div>
        <div className="DetailPage__line">
        </div>
        <div className="DetailPage__pricesDesc">
          <div className="DetailPage__priceDesc">
            <div className="DetailPage__price">
              Price for 1 bottle
            </div>
            <div className="DetailPage__price">
              100 ₴
            </div>
          </div>
          <div className="DetailPage__priceDesc">
            <div className="DetailPage__price">
              Price for 1 box<br />
            </div>
            <div className="DetailPage__price">
              550 ₴
            </div>
          </div>
        </div>
        <div className="DetailPage__bottles">6 bottles</div>
      </section>
    </div>
  )
}