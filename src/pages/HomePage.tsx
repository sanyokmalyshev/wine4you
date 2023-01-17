import { Contacts } from 'components/Contacts/Contacts';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { ProductsList } from 'components/ProductsList/ProductsList';
import Welcome from 'components/Welcome/Welcome';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from 'types/Product';
import { getPromotionsChampagne, getPromotionsWines } from '../helpers/api';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [promoChampagne, setpromoChampagne] = useState<Product[]>([]);
  const [promoWines, setpromoWines] = useState<Product[]>([]);
  const noError = !loadingError && !isLoading;
  const { block } = useParams();
  const location = useRef<HTMLDivElement>(null);

  async function loadProducts () {
    try {
      setLoadingError(false);
      const responseWines = await getPromotionsWines();
      const responseChampagnes = await getPromotionsChampagne();

      setpromoChampagne(responseChampagnes);
      setpromoWines(responseWines);
    } catch (e) {
      setLoadingError(true);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    const abortController = new AbortController();

    loadProducts();

    return () => {
      abortController.abort();
    };
  }, []);

  const scrollToBlock = () => {
    if (location.current !== null && block === 'locations') {
      location.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBlock();
  }, [block]);

  return (
    <>
      <div className='container'>
        <Welcome />
        {!isLoading && loadingError && (
          <div className='page__notification'>
            <Error message='Cant load products'/>
          </div>
        )}

        {isLoading && (
          <div className='page__notification'>
            <Loader />
          </div>
        )}

        {noError && (
          <div className='page__products'>
            <ProductsList
              title='Explore our most popular wines'
              products={ promoWines }
              type={'wines'}
            />
            <ProductsList
              title='Explore our most popular champagnes'
              products={ promoChampagne }
              type={'champagne'}
            />
          </div>
        )}
        <div
          className='page__contacts'
          id="contacts"
          ref={location}
        >
          <Contacts />
        </div>
      </div>
    </>
  );
};
