import "./FilterField.scss";

type Props = {
  filterValues: string[],
  title: string,
  typeInput: string,
  nameField: string,
}

export const FilterField = ({ filterValues, title, typeInput, nameField }: Props) => {
  return (
    <>
      <h4 className="filterTitle FilterField__filterTitle">
        {title}
      </h4> 
      <div className="FilterField__values">
        {filterValues.map(type => (
          <label className="FilterField__label" key={type}>
            <input 
              type={ typeInput } 
              name={ nameField }
              className="FilterField__input"
            />
            { type }
          </label>
        ))}
      </div>
    </>
  )
}