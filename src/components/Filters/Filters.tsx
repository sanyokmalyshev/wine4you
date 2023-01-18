import { CheckboxField } from 'components/CheckboxField/CheckboxField';
import { useMemo } from 'react';
import { NumberField } from 'components/NumberField/NumberField';
import { Product } from 'types/Product';
import './Filters.scss';
import { CheckboxFields } from 'types/CheckboxFields';
import { useSearchParams } from 'react-router-dom';

type Props = {
  products: Product[];
};

export const Filters = ({ products }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const allFilterTypes: CheckboxFields = useMemo(() => {
    const result: CheckboxFields = {
      wineTypeName: [],
      wineStyleName: [],
      meal: [],
      eventName: [],
      wineTasteName: [],
      country: []
    };

    for (const key of Object.keys(result)) {
      const values = products
        .map(product => product[key as keyof CheckboxFields]);

      result[key as keyof CheckboxFields]
        = Array.from(new Set(values));
    }

    return result;
  }, [products]);

  const clearAll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setSearchParams({ page: '1' });
  };

  return (
    <div className='Filters'>
      <h4 className='filterTitle Filters__title'>Catalogue</h4>
      <a
        href=""
        className="link Filters__clear"
        onClick={clearAll}
      >
        Clear all
      </a>
      <div className='Filters__filter'>
        <CheckboxField
          filterValues={ allFilterTypes.wineTypeName }
          title='Wine type'
          nameField='wineTypeName'
        />
      </div>
      <div className='Filters__filter'>
        <CheckboxField
          filterValues={ allFilterTypes.wineStyleName }
          title='Wine style'
          nameField='wineStyleName'
        />
      </div>
      <div className='Filters__filter'>
        <CheckboxField
          filterValues={ allFilterTypes.meal }
          title='Meal'
          nameField='meal'
        />
      </div>
      <div className='Filters__filter'>
        <CheckboxField
          filterValues={ allFilterTypes.eventName }
          title='Event'
          nameField='eventName'
        />
      </div>
      <div className='Filters__filter'>
        <h4 className='filterTitle Filters__filterTitle'>
          Price
        </h4>
        <div className='Filters__inputsPrice'>
          <NumberField
            title='Min'
            nameField='min'
          />
          <NumberField
            title='Max'
            nameField='max'
          />
        </div>
      </div>
    </div>
  );
};
