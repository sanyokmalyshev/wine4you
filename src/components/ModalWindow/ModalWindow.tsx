import { Link } from 'react-router-dom';
import './ModalWindow.scss';

export const ModalWindow = () => {
  return (
    <div className='ModalWindow'>
      <div className="ModalWindow__overlay"></div>
      <div className='ModalWindow__contentWrapper'>
        <div className="ModalWindow__content">
          <h2 className='ModalWindow__title'>
            Dear Customer!
          </h2>
          <h3 className='ModalWindow__warning'>
            Please note that we sell our products to adult customers,  who turned 18 years.
          </h3>
          <p className='ModalWindow__text'>
            In all cases when ordering wine, please present proof of identity, which proves that you are over the age of 18. Otherwise, we have the right to refuse to purchase the product.
          </p>
          <div className='ModalWindow__buttonWrapper'>
            <Link
              to='order'
              type='button'
              className='button ModalWindow__button'
              onClick={() => {
                document.body.style.overflow = 'auto';
              }}
            >
              Agree
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
