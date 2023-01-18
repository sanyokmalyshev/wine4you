import { Filters } from 'components/Filters/Filters';
import './Catalogue.scss';
import 'scss/blocks/filterTitle.scss';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { useEffect, useState, useMemo } from 'react';
import { getWines } from 'helpers/api';
import { Product } from 'types/Product';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { NoResults } from 'components/NoResults/NoResults';
import { CheckboxFields } from 'types/CheckboxFields';

enum StringFilters {
  wineStyleName = 'wineStyleName',
  wineTypeName = 'wineTypeName',
  wineTasteName = 'wineTasteName',
  country = 'country',
  eventName = 'eventName',
}

export const Catalogue = () => {
  const [wines, setWines] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const noError = !loadingError && !isLoading;

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  const query = searchParams.get('query');

  const min = searchParams.get('min') ?? '';
  const max = searchParams.get('max') ?? '';

  const [currentPage, changeCurrentPage] = useState(page ? +page : 1);
  const itemsPerPage = 9;

  async function loadProducts () {
    try {
      setLoadingError(false);
      const responseWines = await getWines();

      setWines(responseWines);
    } catch (e) {
      setLoadingError(true);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    const abortController = new AbortController();

    window.scrollTo({
      top: 0
    });

    loadProducts();

    return () => {
      abortController.abort();
    };
  }, []);

  const allFilters: CheckboxFields = useMemo(() => {
    const wineTypeName = searchParams.getAll('wineTypeName') || [];
    const wineStyleName = searchParams.getAll('wineStyleName') || [];
    const wineTasteName = searchParams.getAll('wineTasteName') || [];
    const eventName = searchParams.getAll('eventName') || [];
    const country = searchParams.getAll('country') || [];
    const meal = searchParams.getAll('meal') || [];

    return (
      {
        wineTypeName,
        wineStyleName,
        eventName,
        wineTasteName,
        country,
        meal
      }
    );
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filterProducts = [...wines];

    if (query) {
      filterProducts = filterProducts
        .filter(product => {
          return (
            product.title.toLowerCase().includes(query.trim().toLowerCase())
          );
        });
    }

    if (min) {
      filterProducts = filterProducts
        .filter(product => {
          return (
            product.price > +min
          );
        });
    }

    if (max) {
      filterProducts = filterProducts
        .filter(product => {
          return (
            product.price < +max
          );
        });
    }

    for (const [key, value] of Object.entries(allFilters)) {
      if (value.length) {
        filterProducts = filterProducts
          .filter(product => {
            const name = product[key as StringFilters];

            return (
              allFilters[key as StringFilters].includes(name)
            );
          });
      }
    }

    return filterProducts;
  }, [wines, query, min, max, allFilters]);

  const countPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const visibleProducts = useMemo(() => {
    let visible: Product[] = [];

    if (filteredProducts) {
      visible = [...filteredProducts];
    }

    if (currentPage < countPages) {
      visible = visible
        .slice((currentPage - 1) * +itemsPerPage,
          +itemsPerPage * currentPage);
    }

    if (currentPage === countPages) {
      visible = visible
        .slice((currentPage - 1) * +itemsPerPage, visible.length);
    }

    return visible;
  }, [countPages, currentPage, filteredProducts]);

  return (
    <div className='container'>
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
        <div className='page__catalogue Catalogue grid'>
          <section className='Catalogue__filters grid__item--1-2'>
            <Filters products={ wines }/>
          </section>
          {filteredProducts.length > 0 && (
            <>
              <section className='Catalogue__content grid__item--4-12'>
                <div className="Catalogue__hint">
                  <i className='Catalogue__hintImg'></i>
                  Want to find wine but don’t know what to choose? That’s easy! <br />Just choose your preferences and we&apos;ll do it all for you.
                </div>
                <div className="Catalogue__products">
                  {visibleProducts.map(card => (
                    <ProductCard card={card} key={card.title} />
                  ))}
                </div>
              </section>
              <div className='Catalogue__pagination grid__item--4-12'>
                {filteredProducts.length > itemsPerPage && (
                  <Pagination
                    countPages={countPages}
                    currentPage={currentPage}
                    changeCurrentPage={changeCurrentPage}
                  />
                )}
              </div>
            </>
          )}

          {filteredProducts.length === 0 && (
            <div className='grid__item--4-12'>
              <NoResults />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
