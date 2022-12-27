import { FilterField } from "components/FilterField/FilterField";
import "./Filters.scss";

const wineType = [
  'White',
  'Red',
  'Champagne & Sparkling wine',
  'Rose'
];

const wineStyle = [
  'Dry',
  'Semy sweet',
  'Oak',
  'Brut',
  'Concentrated',
  'Elegant',
  'Intense',
  'Crisp',
  'Off-dry',
  'Fruity'
];

const event = [
  'Birthday',
  'New Year',
  'Corporate event',
  'Party',
];

const brand = [
  'Yellow Tail',
  'Gallo',
  'Robert Mondavi',
  'Hardys',
  'Ed Edmundo',
];

const country = [
  'France',
  'Italy',
  'Spain',
  'Germany',
  'USA',
  'Argentina',
]

export const Filters = () => {
  return (
    <div className="Filters">
      <h4 className="filterTitle Filters__title">Catalogue</h4>
      <div className="Filters__filter">
        <FilterField 
          filterValues={ wineType } 
          title="Wine type" 
          typeInput="radio"
          nameField="wineType"
        />
      </div>
      <div className="Filters__filter">
        <FilterField 
          filterValues={ wineStyle } 
          title="Wine style"
          typeInput="radio"
          nameField="wineStyle" 
        />
      </div>
      <div className="Filters__filter">
        <FilterField 
          filterValues={ event } 
          title="Event"
          typeInput="checkbox"
          nameField="event" 
        />
      </div>
      <div className="Filters__filter">
        <FilterField 
          filterValues={ brand } 
          title="Brand"
          typeInput="checkbox"
          nameField="event" 
        />
      </div>
      <div className="Filters__filter">
        <h4 className="filterTitle Filters__filterTitle">
          Price
        </h4>
        <div className="Filters__inputsPrice">
          <div className="Filters__price">
            <fieldset className="Filters__fieldset">
              <legend>Min</legend>
              <input type="number" className="Filters__searchPrice"/>
            </fieldset>
          </div>
          <div className="Filters__price">
            <fieldset className="Filters__fieldset">
              <legend>Max</legend>
              <input type="number" className="Filters__searchPrice"/>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="Filters__filter">
        <FilterField 
          filterValues={ country } 
          title="Country"
          typeInput="checkbox"
          nameField="country" 
        />
      </div>
    </div>
  )
}