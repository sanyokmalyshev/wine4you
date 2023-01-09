import './NotFoundPage.scss';
import img from 'imgs/notFound.png';

export const NotFoundPage = () => {
  return (
    <div className='NotFoundPage'>
      <div className='container page__detailPage'>
        <div className='NotFoundPage__imgContainer'>
          <img src={img} alt='' />
        </div>
        <h1 className='NotFoundPage__title'>Ooooops...</h1>
        <p className='NotFoundPage__text'>We’re trying to solve an issue. Please try again in couple of minutes</p>
      </div>
    </div>
  );
};
