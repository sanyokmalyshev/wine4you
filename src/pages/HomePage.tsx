import { Contacts } from "components/Contacts/Contacts"
import { ProductsList } from "components/ProductsList/ProductsList"
import Welcome from "components/Welcome/Welcome"
import { useEffect, useState } from "react";
import { Product } from "types/Product";
import { getPromotionsChampagne, getPromotionsWines } from '../helpers/api';

export const HomePage = () => {
  const [promoChampagne, setpromoChampagne] = useState<Product[]>([]);
  const [promoWines, setpromoWines] = useState<Product[]>([]);

  async function loadProducts() {
    try {
      // let responseWines = await getPromotionsWines();
      // let responseChampagnes = await getPromotionsChampagne();
      
      // for (let i = 0; i < responseWines.length; i++) {
      //   responseWines[i].images
      //     .push('imgs/products/redwine/' + (i + 1) + '/min.jpg');
      //   responseWines[i].images
      //     .push('imgs/products/champagne/' + (i + 1) + '/min.jpg');
      // }

      // console.log(responseChampagnes, responseWines);
      
      // setpromoChampagne(responseChampagnes);
      // setpromoWines(responseWines);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();

    loadProducts();

    return () => {
      abortController.abort();
    };
  }, []);


  return (
    <>
      <Welcome />
      <div className="page__products">
        <ProductsList 
          title="Explore our most popular wines" 
          products={ promoWines }
        />
        <ProductsList 
          title="Explore our most popular champagnes" 
          products={ promoChampagne}
        />
      </div>
      <div className="page__contacts">
        <Contacts />
      </div>
    </>
  )
}