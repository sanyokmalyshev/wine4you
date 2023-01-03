import classNames from "classnames";
import { getNumbers } from "helpers/getNumbers";
import { updateSearch } from "helpers/updateSearch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import "./Pagination.scss";

type Props = {
  countPages: number;
  currentPage: number;
  changeCurrentPage: (number: number) => void;
}

export const Pagination = ({ 
  countPages, currentPage, changeCurrentPage
}: Props) => {
  const numberPages = getNumbers(1, countPages);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const handlePageParams = (number: number | null) => {
    if (number === null) {
      setSearchParams(
        updateSearch(searchParams, { page: number }),
      );
      changeCurrentPage(1);
    }

    if (number !== currentPage && number !== null) {
      setSearchParams(
        updateSearch(searchParams, { page: number.toString() }),
      );
      changeCurrentPage(number);
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (page) {
      changeCurrentPage(+page);
    }
  }, [page, changeCurrentPage])

  return (
    <div className="Pagination">
      <div className="Pagination__pages">
        {numberPages.map(number => (
          <button
            type="button"
            className={classNames(
              'Pagination__button',
              { 'Pagination__button--active': number === currentPage },
            )}
            key={number}
            onClick={() => handlePageParams(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}