import { CheckboxField } from "components/CheckboxField/CheckboxField";
import { useMemo } from "react";
import { NumberField } from "components/NumberField/NumberField";
import { Product } from "types/Product";
import "./Filters.scss";
import { CheckboxFields } from "types/CheckboxFields";

type Props = {
  products: Product[];
}

export const Filters = ({ products }: Props) => {

  const allFilterTypes: CheckboxFields = useMemo(() => {
    const result: CheckboxFields = {
      wineTypeName: [],
      wineStyleName: [],
      eventName: [],
      wineTasteName: [],
      country: [],
    };

    for (const key of Object.keys(result)) {
      const values = products
        .map(product => product[key as keyof CheckboxFields]);
  
      result[key as keyof CheckboxFields] 
        = Array.from(new Set(values as string[]));
    }

    return result;
  }, [products]);

  return (
    <div className="Filters">
      <h4 className="filterTitle Filters__title">Catalogue</h4>
      <div className="Filters__filter">
        <CheckboxField 
          filterValues={ allFilterTypes.wineTypeName } 
          title="Wine type" 
          nameField="wineTypeName"
        />
      </div>
      <div className="Filters__filter">
        <CheckboxField 
          filterValues={ allFilterTypes.wineStyleName } 
          title="Wine style"
          nameField="wineStyleName" 
        />
      </div>
      <div className="Filters__filter">
        <CheckboxField 
          filterValues={ allFilterTypes.eventName } 
          title="Event"
          nameField="eventName" 
        />
      </div>
      <div className="Filters__filter">
        <CheckboxField 
          filterValues={ allFilterTypes.wineTasteName } 
          title="Wine Taste"
          nameField="wineTasteName" 
        />
      </div>
      <div className="Filters__filter">
        <h4 className="filterTitle Filters__filterTitle">
          Price
        </h4>
        <div className="Filters__inputsPrice">
          <NumberField 
            title="Min"
            nameField="min"
          />
          <NumberField 
            title="Max"
            nameField="max"
          />
        </div>
      </div>
      <div className="Filters__filter">
        <CheckboxField 
          filterValues={ allFilterTypes.country } 
          title="Country"
          nameField="country" 
        />
      </div>
    </div>
  )
}