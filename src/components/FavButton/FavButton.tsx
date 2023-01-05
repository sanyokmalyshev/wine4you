import { useAppDispatch, useAppSelector } from "app/hooks";
import { useState, useCallback, useEffect } from 'react';
import { Product } from "types/Product";
import { actions as FavActions } from 'features/favReducer';
import "./FavButton.scss";
import classNames from "classnames";

type Props = {
  card: Product;
  detailPage?: boolean;
}

export const FavButton = ({ card, detailPage }: Props) => {
  const favorites = useAppSelector((state) => state.favorites.products);
  const dispatch = useAppDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const addedToFav = useCallback(() => {
    if (favorites === null) {
      setIsAdded(false);

      return;
    }

    const isAdded = favorites
      .some((prod: Product) => +prod.id === card.id);

    console.log(favorites);
    
    
      setIsAdded(isAdded);
  }, [card, favorites])

  useEffect(() => {
    addedToFav();
  }, [addedToFav]);

  const addToFav = () => {
    const addedProducts = localStorage.getItem('fav');

    if (addedProducts === null || JSON.parse(addedProducts).length === 0) {
      localStorage.setItem('fav', JSON.stringify([card]));
      dispatch(FavActions.addProducts([card]));

      return;
    }

    let newProducts = JSON.parse(addedProducts);

    const isProductAdded = newProducts
      .some((prod: Product) => prod.id === card?.id);

    if (isProductAdded) {
      newProducts = newProducts
        .filter((prod: Product) => prod.id !== card?.id);
    } else {
      newProducts = [...newProducts, card];
    }

    if (newProducts.length === 0) {
      localStorage.removeItem('fav');
      dispatch(FavActions.addProducts([]));

      return;
    }

    localStorage.setItem('fav',
      JSON.stringify(newProducts));

      dispatch(FavActions.addProducts(newProducts));
  };

  return (
    <i 
      className={classNames(
        'FavButton__icon',
        'icon',
        {'FavButton__icon--clicked': isAdded},
        {"FavButton__icon--detail": detailPage},
      )}
      onClick={() => addToFav()}
    ></i>
  )
}