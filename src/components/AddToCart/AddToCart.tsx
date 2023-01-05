import { useAppDispatch, useAppSelector } from "app/hooks";
import { useState, useCallback, useEffect } from 'react';
import { CartItem } from "types/CartItem";
import { Product } from "types/Product";
import { actions as CartActions } from 'features/cartReducer';
import "./AddToCart.scss";
import classNames from "classnames";

type Props = {
  card: Product;
  detailPage?: boolean;
}

export const AddToCart = ({ card, detailPage }: Props) => {
  const cart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const [isAddedToCart, setIsAddedToCard] = useState(false);

  const addedToCard = useCallback(() => {
    if (cart === null) {
      setIsAddedToCard(false);

      return;
    }

    const isAdded = cart
      .some((prod: CartItem) => +prod.id === card.id);
    
    setIsAddedToCard(isAdded);
  }, [card, cart])

  useEffect(() => {
    addedToCard();
  }, [addedToCard]);

  const addToCart = () => {
    const newProduct = {
      id: card.id.toString(),
      quantity: 1,
      product: card,
    };

    const addedProducts = localStorage.getItem('wines');

    if (addedProducts === null 
      || JSON.parse(addedProducts).length === 0) 
    {
      localStorage.setItem('wines', JSON.stringify([newProduct]));
      dispatch(CartActions.addProducts([newProduct]));

      return;
    }

    let newProducts = JSON.parse(addedProducts);

    const isProductAdded = newProducts
      .some((prod: Product) => +prod.id === card.id);

    if (isProductAdded) {
      newProducts = newProducts
        .filter((prod: Product) => +prod.id !== card.id);
    } else {
      newProducts = [...newProducts, newProduct];
    }

    if (newProducts.length === 0) {
      localStorage.removeItem('wines');
      dispatch(CartActions.clearCart());

      return;
    }

    localStorage.setItem('wines',
      JSON.stringify(newProducts));

    dispatch(CartActions.addProducts(newProducts));
  };

  return (
    <button 
      className={classNames(
        "button",
        "addToCart",
        {"addToCart--detail": detailPage},
        {"addToCart--added": isAddedToCart}
      )}
      onClick={() => addToCart()}
    >
      {`${!isAddedToCart ? 'Add' : 'Added'} to cart`}
    </button>
  )
}