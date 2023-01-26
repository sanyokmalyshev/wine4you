import { updateSearch } from 'helpers/updateSearch';
import { useSearchParams } from 'react-router-dom';
import { CheckboxFields } from 'types/CheckboxFields';
import './CheckboxField.scss';

type Props = {
  filterValues: string[],
  title: string,
  nameField: string,
};

export const CheckboxField = ({ filterValues, title, nameField }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const wineTypeName = searchParams.getAll('wineTypeName');
  const wineStyleName = searchParams.getAll('wineStyleName');
  const eventName = searchParams.getAll('eventName');
  const wineTasteName = searchParams.getAll('wineTasteName');
  const country = searchParams.getAll('country');
  const meal = searchParams.getAll('meal');

  const field = nameField as keyof CheckboxFields;

  const checkBoxFilters = {
    wineTypeName,
    wineStyleName,
    eventName,
    wineTasteName,
    meal,
    country
  };

  const handleChangeValue = (e: React.FormEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setSearchParams(
      updateSearch(searchParams, {
        [nameField]: checkBoxFilters[field].includes(value)
          ? checkBoxFilters[field].filter(w => w !== value)
          : [...checkBoxFilters[field], value],
        page: '1'
      })
    );
  };

  return (
    <>
      <h4 className='filterTitle CheckboxField__filterTitle'>
        {title}
      </h4>
      <div
        className='CheckboxField__values'
      >
        {filterValues.map(type => (
          <label className='checkRadioField' key={type}>
            <input
              type='checkbox'
              name={ nameField }
              value={ type }
              className='checkRadioField__input'
              onChange={handleChangeValue}
              checked={checkBoxFilters[field].includes(type)}
            />
            { type }
          </label>
        ))}
      </div>
    </>
  );
};
