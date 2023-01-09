import './Order.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { CartQuantity } from 'components/CartQuantity/CartQuantity';
import CustomSelect from 'components/CustomSelect/CustomSelect';
import { DeliveryAddress } from 'components/DeliveryAddress/DeliveryAddress';
import { TextField } from 'components/TextField.scss/TextField';
import { actions as CartActions } from 'features/cartReducer';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, useFormState } from 'react-hook-form';
import { Inputs } from 'types/Inputs';
import { ShippingMethod, postalOffices, shops } from 'helpers/offices';
import { getWines } from 'helpers/api';
import { useNavigate } from 'react-router-dom';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

export const Order = () => {
  // const cart = useAppSelector((state) => state.cart);
  const cartProducts = useAppSelector((state) => state.cart.products);
  const { totalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    setError,
    control,
    watch,
    formState: { errors, isDirty, isValid }
  } = useForm<Inputs>(
    {
      mode: 'onTouched',
      defaultValues: {
        shipping: ShippingMethod.Courier,
        payment: 'online'
      }
    }
  );
  const { touchedFields } = useFormState({
    control
  });
  const shippingMode = watch('shipping');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const noError = !loadingError && !isLoading;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      setLoadingError(false);
      const responseWines = await getWines();

      console.log(responseWines);
      navigate('/success');
      dispatch(CartActions.clearCart());
    } catch (e) {
      setLoadingError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (shippingMode === ShippingMethod.Courier) {
      dispatch(CartActions.changeDeliveryPrice(50));
    } else {
      dispatch(CartActions.changeDeliveryPrice(0));
    }

    dispatch(CartActions.getTotalPrice());
    dispatch(CartActions.getTotalAmount());
  }, [cartProducts, dispatch, shippingMode]);

  return (
    <div className='Order'>
      <div className='container'>
        {!isLoading && loadingError && (
          <div className='page__notification'>
            <Error message='Cant send request' />
          </div>
        )}

        {isLoading && (
          <div className='page__notification'>
            <Loader />
          </div>
        )}

        {noError && (
          <>
            <h3 className='page__detailPage Order__title'>
              Order placement
            </h3>
            {noError && cartProducts.length > 0 && (
              <section className='grid'>
                <div className='grid__item--1-6'>
                  <h3 className='Order__contact'>
                    Contact information
                  </h3>
                  <form>
                    <div className='Order__inputs'>
                      <div className='Order__nameInputs'>
                        <TextField
                          type='text'
                          touchedFields={touchedFields.name}
                          errors={errors.name}
                          name='name'
                          register={register('name', { required: 'This is required' })}
                          placeholder='Enter a Name'
                        />
                        <TextField
                          type='text'
                          touchedFields={touchedFields.lastName}
                          errors={errors.lastName}
                          name='lastName'
                          register={register('lastName', { required: 'This is required' })}
                          placeholder='Enter a Last Name'
                        />
                      </div>
                      <TextField
                        type='number'
                        touchedFields={touchedFields.phoneNumber}
                        errors={errors.phoneNumber}
                        name='phoneNumber'
                        register={register('phoneNumber', { required: true })}
                        placeholder='Enter a Phone Number'
                      />
                      <TextField
                        type='email'
                        touchedFields={touchedFields.email}
                        errors={errors.email}
                        name='email'
                        placeholder='Enter an Email'
                        register={register('email', {
                          required: true,
                          pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email'
                          }
                        })}
                      />
                    </div>
                    <div className='Order__checkboxes'>
                      <label className='checkRadioField Order__label'>
                        <input
                          type='checkbox'
                          className='checkRadioField__input'
                          {...register('dontCallMeBack')}
                        />
                        Don’t need to call back
                      </label>
                      <label className='checkRadioField Order__label'>
                        <input
                          type='checkbox'
                          className='checkRadioField__input'
                          {...register('buyAsGift')}
                        />
                        Buy as a guift
                      </label>
                    </div>
                    <h3 className='Order__shipping'>Shipping method*</h3>
                    <div className='Order__radios'>
                      <label className='checkRadioField Order__label'>
                        <input
                          type='radio'
                          className='checkRadioField__input'
                          value={ShippingMethod.Courier}
                          {...register('shipping')}
                        />
                        <div className='Order__radioText'>
                          <p>Courier delivery</p>
                          <p>50 ₴</p>
                        </div>
                      </label>
                      <label className='checkRadioField Order__label'>
                        <input
                          type='radio'
                          className='checkRadioField__input'
                          value={ShippingMethod.PostalOffice}
                          {...register('shipping')}
                        />
                        <div className='Order__radioText'>
                          <p>Self-delivery from post offices</p>
                          <p>At postal rates</p>
                        </div>
                      </label>
                      <label className='checkRadioField Order__label'>
                        <input
                          type='radio'
                          className='checkRadioField__input'
                          value={ShippingMethod.Wine4you}
                          {...register('shipping')}
                        />
                        <div className='Order__radioText'>
                          <p>Self-delivery from WINE4YOU Marketplace</p>
                          <p>0 ₴</p>
                        </div>
                      </label>
                    </div>
                    {watch('shipping') === ShippingMethod.Courier && (
                      <DeliveryAddress
                        register={register}
                        errors={errors}
                        unregister={unregister}
                        touchedFields={touchedFields}
                      />
                    )}
                    {watch('shipping') === ShippingMethod.PostalOffice && (
                      <div className='Order__postalOffice'>
                        <h3 className='Order__shipping'>
                          Choose postal office*
                        </h3>
                        <div className='Order__postalSelect'>
                          <CustomSelect
                            options={postalOffices}
                            selectName='Postal office*'
                            register={register}
                            unregister={unregister}
                            registerName='address.postalOffice'
                            errors={Boolean(errors.address?.postalOffice)}
                            setValue={setValue}
                            setError={setError}
                          />
                        </div>
                      </div>
                    )}
                    {watch('shipping') === ShippingMethod.Wine4you && (
                      <div className='Order__postalOffice'>
                        <h3 className='Order__shipping'>
                          Choose the closest shop to you*
                        </h3>
                        <div className='Order__postalSelect'>
                          <CustomSelect
                            options={shops}
                            selectName='Choose shop'
                            register={register}
                            unregister={unregister}
                            registerName='address.wine4youShop'
                            errors={Boolean(errors.address?.wine4youShop)}
                            setValue={setValue}
                            setError={setError}
                          />
                        </div>
                      </div>
                    )}
                    <div className='Order__payment'>
                      <h3 className='Order__shipping'>
                        Payment*
                      </h3>
                      <div className='Order__radios'>
                        <label className='checkRadioField Order__label'>
                          <input
                            type='radio'
                            className='checkRadioField__input'
                            value='online'
                            {...register('payment')}
                          />
                          <div className='Order__radioText'>
                            <p>Online payment (Visa/Mastercard)</p>
                          </div>
                        </label>
                        <label className='checkRadioField Order__label'>
                          <input
                            type='radio'
                            className='checkRadioField__input'
                            value='cash'
                            {...register('payment')}
                          />
                          <div className='Order__radioText'>
                            <p>Payment in cash</p>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className='Order__comment'>
                      <h3 className='Order__shipping'>
                        Your comment to order
                      </h3>
                      <div className='Order__comment'>
                        <textarea
                          {...register('comment')}
                          className='Order__commentField'
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className='grid__item--8-12 Order__products'>
                  <h3 className='Order__cartTitle'>Your order</h3>
                  <div className='Order__content'>
                    {cartProducts.map(item => (
                      <div className='Order__product' key={item.id}>
                        <div className='Order__imgWrapper grid__item--1-2'>
                          <img
                            className='Order__img'
                            src={`http://wine4you-env.eba-gvaizune.us-east-1.elasticbeanstalk.com/api/v1/wines/${item.id}/images/${item.product.imageIds[0]}`}
                            alt=''
                          />
                        </div>
                        <div className='grid__item--3-5'>
                          <div className='Order__itemTitle'>
                            <p className='Order__productTitle'>
                              {item.product.title}
                            </p>
                            <div className='Order__close'>
                              <button
                                type='button'
                                className='
                                  icon
                                  Order__closeIcon
                                '
                                onClick={() => {
                                  dispatch(
                                    CartActions.removeItem(item.id)
                                  );
                                }}
                              />
                            </div>
                          </div>
                          <div className='Order__itemPrice'>
                            <div className='Order__quantity'>
                              <CartQuantity item={item} />
                            </div>
                            <p className='Order__price'>
                              {(item.product.price * item.quantity).toFixed(2)} ₴
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='Order__line' />
                  <div className='Order__totalAmount'>
                    <p className='Order__totalText'>Total amount</p>
                    <p className='Order__price'>{totalAmount}</p>
                  </div>
                  <div className='Order__confirm'>
                    <button
                      type='submit'
                      className='button'
                      onClick={() => {
                        handleSubmit(onSubmit)();
                      }}
                      disabled={!isDirty || !isValid}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </section>
            )}

            {noError && cartProducts.length === 0 && (
              <h1>Your cart is empty</h1>
            )}
          </>
        )}
      </div>
    </div>
  );
};
