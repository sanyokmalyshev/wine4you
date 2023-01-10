import './Cart.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect, useState } from 'react';
import { actions as CartActions } from 'features/cartReducer';
import { Link } from 'react-router-dom';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { CartQuantity } from 'components/CartQuantity/CartQuantity';

export const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const { totalPrice, deliveryPrice, totalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [isModalActive, setisModalActive] = useState(false);
  const discount = 0;

  useEffect(() => {
    dispatch(CartActions.getTotalPrice());
    dispatch(CartActions.getTotalAmount());
  }, [cartProducts, dispatch]);

  return (
    <div className='Cart'>
      {isModalActive && <ModalWindow />}
      <div className='container'>
        <h1 className='page__detailPage title Cart__title'>
          Cart
        </h1>
        {cartProducts.length > 0 && (
          <section className='Cart__content grid'>
            <div className='Cart__products grid__item--1-12'>
              {cartProducts.map(item => (
                <div
                  className='Cart__product grid'
                  key={item.id}
                >
                  <div
                    className='Cart__imgContainer grid__item--1-2'
                  >
                    <img src={`http://wine4you-env.eba-gvaizune.us-east-1.elasticbeanstalk.com/api/v1/wines/${item.id}/images/${item.product.imageIds[0]}`} alt='' className='Cart__img'/>
                  </div>
                  <div className='Cart__desc grid__item--3-7'>
                    <div className='Cart__name'>
                      <Link to={`/catalogue/${item.product.id}`} className='Cart__name link'>
                        {item.product.title}
                      </Link>
                    </div>
                    <div className='Cart__capacity'>
                      {item.product.capacity} L
                    </div>
                  </div>
                  <div className='Cart__quantity grid__item--8-8'>
                    <CartQuantity item={item} />
                  </div>
                  <div className='Cart__price grid__item--10-11'>
                    {(item.product.price * item.quantity).toFixed(2)} ₴
                    <button
                      type='button'
                      className='Cart__delete button'
                      onClick={() => {
                        dispatch(CartActions.removeItem(item.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className='Cart__summary grid__item--1-11'>
              <div className='Cart__summContent'>
                <div className='Cart__summValues'>
                  <div className='Cart__name'>
                    Total
                  </div>
                  <div className='Cart__name'>
                    {totalPrice} ₴
                  </div>
                </div>
                <div className='Cart__summValues'>
                  <div className='Cart__name'>
                    Delivery
                  </div>
                  <div className='Cart__name'>
                    {deliveryPrice} ₴
                  </div>
                </div>
                <div className='Cart__summValues'>
                  <div className='Cart__name'>
                    Discount
                  </div>
                  <div className='Cart__name'>
                    {discount} ₴
                  </div>
                </div>
              </div>
              <div className='Cart__line'></div>
              <div className='Cart__totalBlock'>
                <div className='Cart__totalValue'>
                  Total amount
                </div>
                <div className='Cart__totalValue'>
                  {totalAmount.toFixed(2)} ₴
                </div>
              </div>
            </div>
            <div className='Cart__buttons grid__item--1-12 grid'>
              <Link
                to='/catalogue'
                type='button'
                className='
                  Cart__button
                  grid__item--7-9
                  button
                '
              >
                Continue shopping
              </Link>
              <button
                className='grid__item--10-12 button'
                onClick={() => {
                  document.body.style.overflow = 'hidden';
                  setisModalActive(true);
                }}
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
  );
};
