import { ProductCard } from 'components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { Product } from 'types/Product';
import './ProductsList.scss';

type Props = {
  title: string;
  products: Product[];
  type: string;
};

export const ProductsList = ({ title, products, type }: Props) => {
  const filterUrl = type === 'wines'
    ? 'wineTypeName=White&&wineTypeName=Red&&wineTypeName=Rose'
    : 'wineTypeName=Champagne+%26+Sparkling';

  return (
    <section className='ProductsList page__products'>
      <h1 className='ProductsList__title page__title'>
        {title}
      </h1>
      <div className='ProductsList__cards'>
        {products.map(card => (
          <ProductCard card={card} key={card.title} />
        ))}
      </div>
      <div className='ProductsList__more'>
        <Link
          to={`catalogue?${filterUrl}`}
          className='ProductsList__button button'
        >
          Show me more items
        </Link>
      </div>
    </section>
  );
};
