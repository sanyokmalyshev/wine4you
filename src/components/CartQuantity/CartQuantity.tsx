import { useAppDispatch } from "app/hooks";
import { CartItem } from "types/CartItem";
import { actions as CartActions } from 'features/cartReducer';
import "./CartQuantity.scss";

type Props = {
  item: CartItem;
}

export const CartQuantity = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className="CartQuantity">
      <button 
        type="button" 
        className="icon CartQuantity__icon CartQuantity__icon--minus"
        onClick={() => {
          dispatch(
            CartActions.handleCount({
              productId: item.id, sign: '-'
            })
          )
        }}
        disabled={item.quantity === 1}
      />
      <span className="CartQuantity__number">{item.quantity}</span>
      <button 
        type="button" 
        className="
          icon 
          CartQuantity__icon  
          CartQuantity__icon--plus
        "
        onClick={() => {
          dispatch(
            CartActions.handleCount({
              productId: item.id, sign: '+'
            })
          )
        }}
      />
    </div>
  )
}