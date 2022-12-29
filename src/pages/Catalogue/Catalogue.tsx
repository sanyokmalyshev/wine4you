import { Filters } from "components/Filters/Filters";
import "./Catalogue.scss";
import "scss/blocks/filterTitle.scss";
import { ProductCard } from "components/ProductCard/ProductCard";
import { useEffect, useState, useCallback } from "react";
import { getWines } from "helpers/api";
import { Product } from "types/Product";
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { Pagination } from "components/Pagination/Pagination";
import img from "imgs/products/champagne/1/min.jpg";
import { Card } from "types/Card";

const cards: Card[] = [
  {
    imgSrc: img,
    title: 'Name of wine1',
    price: 100,
  },
  {
    imgSrc: img,
    title: 'Name of wine2',
    price: 100,
  },
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
]

export const Catalogue = () => {
  const [wines, setWines] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const noError = !loadingError && !isLoading;
  const countPages = Math.ceil(wines.length / 9);
  const [currentPage, changeCurrentPage] = useState(1);
  
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

  return (
    <>
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
          <section className="Catalogue__products grid grid__item--4-12">
            {wines.map(card => (
              <ProductCard card={card} key={card.title} />
            ))}
          </section>
          <section className="Catalogue__pagination grid__item--4-12">
            <Pagination 
              countPages={ countPages }
            />
          </section>
        </div>
      )}
    </>
  )
}