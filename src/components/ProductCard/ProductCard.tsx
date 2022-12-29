import classNames from 'classnames';
import { useState } from 'react';
import { Product } from 'types/Product';
import "./ProductCard.scss";

type Props = {
  card: Product;
}

export const ProductCard = ({ card }: Props) => {
  const [isFavAdded, setIsFavAdded] = useState(false);
  return (
    <div className="ProductCard">
      <div className="ProductCard__imgContainer">
        <img 
          src={process.env.PUBLIC_URL+"/images/home_img.jpg"}
          alt="img" 
          className="ProductCard__img"
        />
      </div>
      <div className="ProductCard__fav">
        <i 
          className={classNames(
            'ProductCard__icon',
            'icon',
            {'ProductCard__icon--clicked': isFavAdded}
          )}
          onClick={() => setIsFavAdded(!isFavAdded)}
        ></i>
      </div>
      <div className="ProductCard__title">
        {card.title}
      </div>
      <div className="ProductCard__price">
        {card.price} ₴
      </div>
      <button className="ProductCard__button button">
        Add to cart
      </button>
      <button className="ProductCard__button ProductCard__button--more button">
        More info
      </button>
    </div>
  )
}