import { ProductCard } from 'components/ProductCard/ProductCard';
import { Product } from 'types/Product';
import "./ProductsList.scss";

type Props = {
  title: string;
  products: Product[];
}

export const ProductsList = ({ title, products }: Props) => {
  return (
    <section className="ProductsList page__products">
      <h1 className="ProductsList__title page__title">
        {title}
      </h1>
      <div className="ProductsList__cards">
        {products.map(card => (
          <ProductCard card={card} key={card.title} />
        ))}
      </div>
      <div className="ProductsList__more">
        <button 
          type="button" 
          className="ProductsList__button button"
        >
          Show me more items
        </button>
      </div>
    </section>
  )
}