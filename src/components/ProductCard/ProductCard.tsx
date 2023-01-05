import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/Product';
import "./ProductCard.scss";
import { AddToCart } from 'components/AddToCart/AddToCart';

type Props = {
  card: Product;
}

export const ProductCard = ({ card }: Props) => {
  const [isFavAdded, setIsFavAdded] = useState(false);

  return (
    <div className="ProductCard">
      <div className="ProductCard__top">
        <Link 
          to={`/catalogue/${card.id}`} className="ProductCard__imgContainer"
        >
          <img 
            src={`http://wine4you-env.eba-gvaizune.us-east-1.elasticbeanstalk.com/api/v1/wines/${card?.id}/images/${card?.imageIds[0]}`}  
            alt="img" 
            className="ProductCard__img"
          />
        </Link>
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
      </div>
      <div className="ProdcuctCard__bottom">
        <div className="ProductCard__price">
          {card.price} ₴
        </div>
        <div className="ProductCard__buttons">
          <div className="ProductCard__button">
            <AddToCart card={card} />
          </div>
          <div className="ProductCard__button">
            <Link to={`/catalogue/${card.id}`} className="addToCart addToCart--more button">
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}