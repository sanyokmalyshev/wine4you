import { Filters } from "components/Filters/Filters";
import "./Catalogue.scss";
import "scss/blocks/filterTitle.scss";
import CardImg from 'imgs/cardImg.png';
import { ProductCard } from "components/ProductCard/ProductCard";

const cards = [
  {
    imgSrc: CardImg,
    title: 'Name of wine 1',
    price: 150,
  },
  {
    imgSrc: CardImg,
    title: 'Name of wine 2',
    price: 150,
  },
  {
    imgSrc: CardImg,
    title: 'Name of wine 3',
    price: 150,
  },
  {
    imgSrc: CardImg,
    title: 'Name of wine 4',
    price: 150,
  },
  {
    imgSrc: CardImg,
    title: 'Name of wine 5',
    price: 150,
  },
  {
    imgSrc: CardImg,
    title: 'Name of wine 6',
    price: 150,
  },
  {
    imgSrc: CardImg,
    title: 'Name of wine 7',
    price: 150,
  },
  {
    imgSrc: CardImg,
    title: 'Name of wine 8',
    price: 150,
  },
  {
    imgSrc: CardImg,
    title: 'Name of wine 9',
    price: 150,
  }
]

export const Catalogue = () => {
  return (
    <div className="page__catalogue Catalogue grid">
      <section className="Catalogue__filters grid__item--1-2">
        <Filters />
      </section>
      <section className="Catalogue__products grid__item--4-12">
        {cards.map(card => (
          <ProductCard card={card} key={card.title} />
        ))}
      </section>
    </div>
  )
}