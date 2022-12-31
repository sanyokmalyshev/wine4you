import { Filters } from "components/Filters/Filters";
import "./Catalogue.scss";
import "scss/blocks/filterTitle.scss";
import { ProductCard } from "components/ProductCard/ProductCard";
import { useEffect, useState, useMemo } from "react";
import { getWines } from "helpers/api";
import { Product } from "types/Product";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { Pagination } from "components/Pagination/Pagination";
import img from "imgs/products/champagne/1/min.jpg";
import { Card } from "types/Card";
import { useSearchParams } from "react-router-dom";
import { NoResults } from "components/NoResults/NoResults";

// const cards: Card[] = [
//   {
//     imgSrc: img,
//     title: 'Name of wine1',
//     price: 100,
//   },
//   {
//     imgSrc: img,
//     title: 'Name of wine2',
//     price: 100,
//   },
  // {
  //   imgSrc: img,
  //   title: 'Name of wine3',
  //   price: 100,
  // },
  // {
  //   imgSrc: img,
  //   title: 'Name of wine4',
  //   price: 100,
  // },
  // {
  //   imgSrc: img,
  //   title: 'Name of wine4',
  //   price: 100,
  // },
  // {
  //   imgSrc: img,
  //   title: 'Name of wine4',
  //   price: 100,
  // },
  // {
  //   imgSrc: img,
  //   title: 'Name of wine4',
  //   price: 100,
  // },
  // {
  //   imgSrc: img,
  //   title: 'Name of wine4',
  //   price: 100,
  // },
  // {
  //   imgSrc: img,
  //   title: 'Name of wine4',
  //   price: 100,
  // },
// ]

export const Catalogue = () => {

  const [wines, setWines] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const noError = !loadingError && !isLoading;
  
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  const wineTypes = searchParams.getAll('wineTypes').map(param => (
    param.split(' ')[0].toUpperCase()
  ));

  const [currentPage, changeCurrentPage] = useState(page ? +page : 1);
  const itemsPerPage = 9;

  async function loadProducts() {
    try {
      setLoadingError(false);
      const responseWines = await getWines();
      
      // for (let i = 0; i < responseWines.length; i++) {
      //   responseWines[i].images
      //     .push(process.env.PUBLIC_URL + '/images/products/redwine/' + (i + 1) + '/min.jpg');
      // }
      console.log(responseWines);
      
      setWines(responseWines);
    } catch (e) {
      console.log(e);
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


  const filteredProducts = useMemo(() => {
    let filterProducts = [...wines];
    
    if (wineTypes.length) {
      filterProducts = filterProducts
        .filter(product => {
          const name = product.wineType.split('_')[0].toUpperCase();
          return (
            wineTypes.includes(name)
          );
        });
    }
    
    return filterProducts;
  }, [wines, wineTypes]);

  const countPages = Math.ceil(filteredProducts.length / 9);

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
    <div className="container">
      {!isLoading && loadingError && (
          <div className="page__notification">
            <Error />
          </div>
        )}

      {isLoading && (
        <div className="page__notification">
          <Loader />
        </div>
      )}

      {noError && (
        <div className="page__catalogue Catalogue grid">
          <section className="Catalogue__filters grid__item--1-2">
            <Filters />
          </section>
          {filteredProducts.length ? (
            <>
              <section className="Catalogue__products grid grid__item--4-12">
                {visibleProducts.map(card => (
                  <ProductCard card={card} key={card.title} />
                ))}
              </section>
              <div className="Catalogue__pagination grid__item--4-12">
                {filteredProducts.length > itemsPerPage && (
                  <Pagination 
                    countPages={countPages}
                    currentPage={currentPage}
                    // handlePageParams={handlePageParams}
                    changeCurrentPage={changeCurrentPage} 
                  />
                )}
              </div>
            </>
          ) : (
            <div className="grid__item--4-12">
              <NoResults />
            </div>
          )}
          
          
        </div>
        
      )}
    </div>
  )
}