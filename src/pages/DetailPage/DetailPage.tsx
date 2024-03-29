import { AddToCart } from 'components/AddToCart/AddToCart';
import { Error } from 'components/Error/Error';
import { FavButton } from 'components/FavButton/FavButton';
import { Loader } from 'components/Loader/Loader';
import { getWine } from 'helpers/api';
import { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from 'types/Product';
import './DetailPage.scss';

export const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const noError = !loadingError && !isLoading;

  const loadProduct = useCallback(async () => {
    try {
      setLoadingError(false);

      const responseProduct = id ? await getWine(+id) : null;

      responseProduct && setProduct(responseProduct);
    } catch (e) {
      setLoadingError(true);
    }

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    const abortController = new AbortController();

    window.scrollTo({
      top: 0
    });

    loadProduct();

    return () => {
      abortController.abort();
    };
  }, [loadProduct]);

  return (
    <div className='container'>
      {!isLoading && loadingError && (
        <div className='page__notification'>
          <Error message='Cant load product'/>
        </div>
      )}

      {isLoading && (
        <div className='page__notification'>
          <Loader />
        </div>
      )}

      {noError && (
        <div className='DetailPage page__detailPage grid'>
          <div className='DetailPage__imgContainer grid__item--1-5'>
            <img
              src={`http://wine4you-env.eba-gvaizune.us-east-1.elasticbeanstalk.com/api/v1/wines/${product?.id}/images/${product?.imageIds[1]}`}
              alt=''
              className='DetailPage__img'
            />
          </div>
          <section className='DetailPage__description grid__item--7-12'>
            <h1 className='DetailPage__title'>
              {product?.title}
            </h1>
            <div className='DetailPage__perfectFor'>
              <p className='DetailPage__perfectTitle'>Perfect for:</p>
              <div className='DetailPage__buttons'>
                <Link to={`/catalogue?eventName=${product?.eventName ?? ''}`} className='button DetailPage__button'>
                  {product?.eventName ?? ''}
                </Link>
              </div>
            </div>
            <div className='DetailPage__buyButtons'>
              <div className='DetailPage__buyButton'>
                {product
                  && <AddToCart card={product} detailPage />
                }
              </div>
              <div className='DetailPage__favButton'>
                {product
                  && <FavButton card={product} detailPage />
                }
              </div>
            </div>
            <div className='DetailPage__line'>
            </div>
            <div className='DetailPage__pricesDesc'>
              <div className='DetailPage__priceDesc'>
                <div className='DetailPage__price'>
                  Price for 1 bottle
                </div>
                <div className='DetailPage__price'>
                  {product?.price} ₴
                </div>
              </div>
              <div className='DetailPage__priceDesc'>
                <div className='DetailPage__price'>
                  Price for 1 box<br />
                </div>
                <div className='DetailPage__price'>
                  {product
                    && (product.price * 0.9 * 6).toFixed(2)} ₴
                </div>
              </div>
            </div>
            <div className='DetailPage__bottles'>6 bottles</div>
            <div className='DetailPage__descBlocks'>
              <div className='DetailPage__descBlock'>
                <div className='DetailPage__descTitleValue grid__item--1-3'>
                  <h3 className='DetailPage__descTitle'>Brand</h3>
                  <p className='DetailPage__descValue'>
                    {product?.brand}
                  </p>
                </div>
                <div className='DetailPage__descTitleValue grid__item--4-6'>
                  <h3 className='DetailPage__descTitle'>
                    Wine type
                  </h3>
                  <p className='DetailPage__descValue'>
                    {product?.wineTypeName}
                  </p>
                </div>
              </div>
              <div className='DetailPage__descBlock'>
                <div className='DetailPage__descTitleValue grid__item--1-3'>
                  <h3 className='DetailPage__descTitle'>Volume of bottle</h3>
                  <p className='DetailPage__descValue'>
                    {product?.capacity}
                  </p>
                </div>
                <div className='DetailPage__descTitleValue grid__item--4-6'>
                  <h3 className='DetailPage__descTitle'>
                    Wine style
                  </h3>
                  <p className='DetailPage__descValue'>
                    {product?.wineStyleName}
                  </p>
                </div>
              </div>
              <div className='DetailPage__descBlock'>
                <div className='DetailPage__descTitleValue grid__item--1-3'>
                  <h3 className='DetailPage__descTitle'>
                    About wine
                  </h3>
                  <p className='DetailPage__descValue'>
                    {product?.description}
                  </p>
                </div>
                <div className='DetailPage__descTitleValue grid__item--4-6'>
                  <div className='DetailPage__descTitleValue'>
                    <h3 className='DetailPage__descTitle'>
                      Geography
                    </h3>
                    <p className='DetailPage__descValue'>
                      {product?.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
