import "./Cart.scss";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useMemo } from "react";
import { CartItem } from "types/CartItem";
import { actions as CartActions } from 'features/cartReducer';
import { Link } from "react-router-dom";

export const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const deliveryPrice = 50;
  const discount = 0;

  const handleCount = (productId: string, sign: string) => {
    const newCartProducts: CartItem[] = [];
  
    cartProducts.forEach(currentProduct => {
      const copy = { ...currentProduct };

      if (currentProduct.id === productId) {
        switch (sign) {
          case '+':
            copy.quantity = currentProduct.quantity + 1;
            break;
          case '-':
            copy.quantity = currentProduct.quantity - 1;
            break;
          default:
            break;
        }
      }

      newCartProducts.push(copy);
    });

    localStorage.setItem('wines', JSON.stringify(newCartProducts));
    dispatch(CartActions.addProducts(newCartProducts));
  };

  const removeItem = (productId: string) => {
    const newCartProducts: CartItem[] = [];
  
    cartProducts.forEach(currentProduct => {
      const copy = { ...currentProduct };

      if (currentProduct.id !== productId) {
        newCartProducts.push(copy);
      }
    });

    if (newCartProducts.length === 0) {
      localStorage.removeItem('wines');
      dispatch(CartActions.addProducts(newCartProducts));
    } else {
      localStorage.setItem('wines', JSON.stringify(newCartProducts));
      dispatch(CartActions.addProducts(newCartProducts));
    }
  };

  const totalPrice = useMemo(() => {
    return cartProducts.reduce((accum, next) => {
      return next.quantity * next.product.price + accum;
    }, 0);
  }, [cartProducts]);

  const totalAmount = useMemo(() => {
    return totalPrice + deliveryPrice + discount;
  }, [totalPrice, deliveryPrice, discount]);

  return (
    <div className="Cart">
      <div className="container">
        <h1 className="page__detailPage Cart__title">
          Cart
        </h1>
        {cartProducts.length > 0 && (
          <section className="Cart__content grid">
            <div className="Cart__products grid__item--1-12">
              {cartProducts.map(item => (
                <div 
                  className="Cart__product grid"
                  key={item.id}
                >
                <div 
                  className="Cart__imgContainer grid__item--1-2"
                >
                  <img src={`http://wine4you-env.eba-gvaizune.us-east-1.elasticbeanstalk.com/api/v1/wines/${item.id}/images/${item.product.imageIds[0]}`}  alt="" className="Cart__img"/>
                </div>
                <div className="Cart__desc grid__item--3-7">
                  <div className="Cart__name">
                    <Link to={`/catalogue/${item.product.id}`}  className="Cart__name link">
                      {item.product.title}
                    </Link>
                  </div>
                  <div className="Cart__capacity">
                    {item.product.capacity} L
                  </div>
                </div>
                <div className="Cart__quantity grid__item--8-8">
                  <button 
                    type="button" 
                    className="icon Cart__icon Cart__icon--minus"
                    onClick={() => handleCount(item.id, '-')}
                    disabled={item.quantity === 1}
                  >
                    
                  </button>
                  <span className="Cart__number">{item.quantity}</span>
                  <button 
                    type="button" 
                    className="icon Cart__icon Cart__icon--plus"
                    onClick={() => handleCount(item.id, '+')}
                  >
                    
                  </button>
                </div>
                <div className="Cart__price grid__item--10-11">
                  {(item.product.price * item.quantity).toFixed(2)} ₴
                  <button 
                    type="button" 
                    className="Cart__delete button"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              ))}
            </div>
            <div className="Cart__summary grid__item--1-11">
              <div className="Cart__summContent">
                <div className="Cart__summValues">
                  <div className="Cart__name">
                    Total
                  </div>
                  <div className="Cart__name">
                    {totalPrice.toFixed(2)} ₴
                  </div>
                </div>
                <div className="Cart__summValues">
                  <div className="Cart__name">
                    Delivery
                  </div>
                  <div className="Cart__name">
                    {deliveryPrice} ₴
                  </div>
                </div>
                <div className="Cart__summValues">
                  <div className="Cart__name">
                    Discount
                  </div>
                  <div className="Cart__name">
                    {discount} ₴
                  </div>
                </div>
              </div>
              <div className="Cart__line"></div>
              <div className="Cart__totalBlock">
                <div className="Cart__totalValue">
                  Total amount
                </div>
                <div className="Cart__totalValue">
                  {totalAmount.toFixed(2)} ₴
                </div>
              </div>
            </div>
            <div className="Cart__buttons grid__item--1-12 grid">
              <Link 
                to="/catalogue"
                type="button" 
                className="
                  Cart__button 
                  grid__item--7-9 
                  button
                "
              >
                Continue shopping
              </Link>
              <button 
                className="grid__item--10-12 button"
              >
                Buy
              </button>
            </div>
          </section>
        )}

        {cartProducts.length === 0 && (
          <h1>Your cart is empty</h1>
        )}
      </div>
    </div>
  )
}