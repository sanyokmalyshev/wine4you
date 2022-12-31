import classNames from "classnames";
import "./DetailPage.scss";

export const DetailPage = () => {
  return (
    <div className="container">
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
          <div className="DetailPage__descBlocks">
            <div className="DetailPage__descBlock">
              <div className="DetailPage__descTitleValue grid__item--1-3">
                <h3 className="DetailPage__descTitle">Brand</h3>
                <p className="DetailPage__descValue">
                  Amet minim
                </p>
              </div>
              <div className="DetailPage__descTitleValue grid__item--4-6">
                <h3 className="DetailPage__descTitle">
                  Wine type
                </h3>
                <p className="DetailPage__descValue">
                  Red / white / rose
                </p>
              </div>
            </div>
            <div className="DetailPage__descBlock">
              <div className="DetailPage__descTitleValue grid__item--1-3">
                <h3 className="DetailPage__descTitle">Volume of bottle</h3>
                <p className="DetailPage__descValue">
                  0.5 / 0.75 / 1.0 / 1.5
                </p>
              </div>
              <div className="DetailPage__descTitleValue grid__item--4-6">
                <h3 className="DetailPage__descTitle">
                  Wine style
                </h3>
                <p className="DetailPage__descValue">
                  Dry / semi sweet, /sweet
                </p>
              </div>
            </div>
            <div className="DetailPage__descBlock">
              <div className="DetailPage__descTitleValue grid__item--1-3">
                <h3 className="DetailPage__descTitle">
                  About wine
                </h3>
                <p className="DetailPage__descValue">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="DetailPage__descTitleValue grid__item--4-6">
                <div className="DetailPage__descTitleValue">
                  <h3 className="DetailPage__descTitle">
                    Geography
                  </h3>
                  <p className="DetailPage__descValue">
                    Country
                  </p>
                </div>
                <div className="DetailPage__descTitleValue">
                  <h3 className="DetailPage__descTitle">
                    % of alcohol
                  </h3>
                  <p className="DetailPage__descValue">
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}