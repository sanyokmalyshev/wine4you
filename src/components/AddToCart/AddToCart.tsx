import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useState, useCallback, useEffect } from 'react';
import { CartItem } from 'types/CartItem';
import { Product } from 'types/Product';
import { actions as CartActions } from 'features/cartReducer';
import './AddToCart.scss';
import classNames from 'classnames';

type Props = {
  card: Product;
  detailPage?: boolean;
};

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
  }, [card, cart]);

  useEffect(() => {
    addedToCard();
  }, [addedToCard]);

  return (
    <button
      className={classNames(
        'button',
        'addToCart',
        { 'addToCart--detail': detailPage }
      )}
      onClick={() => {
        dispatch(CartActions.addToCart(card));
      }}
    >
      {`${!isAddedToCart ? 'Add to' : 'In'} cart`}
    </button>
  );
};
