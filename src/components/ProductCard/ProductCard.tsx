import { Card } from "types/Card";
import "./ProductCard.scss";

type Props = {
  card: Card;
}

export const ProductCard = ({ card }: Props) => {
  return (
    <div className="ProductCard">
      <div className="ProductCard__img">
        <img src={card.imgSrc} alt="img" />
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