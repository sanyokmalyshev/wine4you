import './Success.scss';
import img from 'imgs/success_back.png';

export const Success = () => {
  return (
    <div className="Success">
      <div className="page__detailPage container">
        <div className="Success__imgContainer">
          <img src={img} alt="" />
        </div>
        <h1 className='Success__title'>Success!</h1>
        <p className='Success__text'>
          Your order has been accepted for processing. Please wait for the message that your order is ready for pickup.
        </p>
      </div>
    </div>
  );
};
