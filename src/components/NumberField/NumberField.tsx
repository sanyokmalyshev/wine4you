import { updateSearch } from "helpers/updateSearch";
import { useSearchParams } from "react-router-dom";
import "./NumberField.scss";

type Props = {
  title: string,
  nameField: string,
}

type NumberFields = {
  min: string,
  max: string,
}

export const NumberField = ({ title, nameField }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const min = searchParams.get('min') || '';
  const max = searchParams.get('max') || '';

  const numberFields: NumberFields = {
    min,
    max
  }

  const handleChangeValue = (
    e: React.FormEvent<HTMLDivElement>, nameField: string,
  ) => {
    const value = (e.target as HTMLInputElement).value;
    
    setSearchParams(
      updateSearch(searchParams, { 
        [nameField]: value ? value : null,
        page: "1"
      })
    )
  }

  return (
    <div className="NumberField">
      <fieldset className="NumberField__fieldset">
        <legend>{ title }</legend>
        <input 
          type="number" 
          className="NumberField__searchPrice"
          onChange={(e) => handleChangeValue(e, nameField)}
          value={numberFields[nameField as keyof NumberFields]}
        />
      </fieldset>
    </div>
  )
}