import { Contacts } from "components/Contacts/Contacts"
import { ProductsList } from "components/ProductsList/ProductsList"
import Welcome from "components/Welcome/Welcome"

export const HomePage = () => {
  return (
    <>
      <Welcome />
      <div className="page__products">
        <ProductsList title="Explore our most popular wines" />
        <ProductsList title="Explore our most popular champagnes" />
      </div>
      <div className="page__contacts">
        <Contacts />
      </div>
    </>
  )
}