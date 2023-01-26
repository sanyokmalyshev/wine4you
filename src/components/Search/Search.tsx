import classNames from 'classnames';
import { updateSearch } from 'helpers/updateSearch';
import { createRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';

export const Search = () => {
  const inputRef = createRef<HTMLInputElement>();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleClick = () => {
    if (!query) {
      inputRef.current?.focus();

      return;
    }

    setSearchParams(
      updateSearch(searchParams, { query: null })
    );
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchParams(
      updateSearch(searchParams,
        {
          query: value || null,
          page: '1'
        }
      )
    );
  };

  return (
    <div className='Header__search Search'>
      <div className='Search__inputWrapper'>
        <i
          className='Search__searchIcon icon'
          onClick={handleClick}
        ></i>
        <input
          type='text'
          className='Search__input'
          placeholder='Search in catalogue'
          ref={inputRef}
          value={query ?? ''}
          onChange={handleInput}
        />
        <i
          className={classNames(
            'icon',
            { Search__deleteIcon: query }
          )}
          onClick={handleClick}
          role='button'
          tabIndex={0}
          aria-hidden='true'
        />
      </div>
    </div>
  );
};
