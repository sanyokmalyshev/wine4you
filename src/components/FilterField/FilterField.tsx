import { updateSearch } from "helpers/updateSearch";
import { useSearchParams } from "react-router-dom";
import "./FilterField.scss";

type Props = {
  filterValues: string[],
  title: string,
  typeInput: string,
  nameField: string,
}

export const FilterField = ({ filterValues, title, typeInput, nameField }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const wineTypes = searchParams.getAll('wineTypes') || [];

  const handleChangeValue = (e: React.FormEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLInputElement).value;

    console.log(value);
    setSearchParams(
      updateSearch(searchParams, { 
        wineTypes: wineTypes.includes(value) 
        ? wineTypes.filter(w => w !== value)
        : [...wineTypes, value],
        page: "1"
      })
    )
  }

  return (
    <>
      <h4 className="filterTitle FilterField__filterTitle">
        {title}
      </h4> 
      <div 
        className="FilterField__values" 
      >
        {filterValues.map(type => (
          <label className="FilterField__label" key={type}>
            <input 
              type="checkbox"
              name={ nameField }
              value={ type }
              className="FilterField__input"
              checked={wineTypes.includes(type)}
              onChange={(e) => handleChangeValue(e)}
            />
            { type }
          </label>
        ))}
      </div>
    </>
  )
}