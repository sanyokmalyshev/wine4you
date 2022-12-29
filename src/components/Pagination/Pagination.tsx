import classNames from "classnames";
import { getNumbers } from "helpers/getNumbers";
import "./Pagination.scss";

type Props = {
  countPages: number;
}

export const Pagination = ({ countPages }: Props) => {
  const numberPages = getNumbers(1, countPages);

  return (
    <div className="Pagination">
      <div className="Pagination__pages">
        {numberPages.map(number => (
          <button
            type="button"
            className={classNames(
              'Pagination__button',
              // { 'button--active': number === currentPage },
            )}
            key={number}
            // onClick={() => handlePageParams(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}