import { useAppSelector } from "app/hooks";
import { ProductCard } from "components/ProductCard/ProductCard";
import "./Favorites.scss";

export const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites.products);

  return (
    <div className="Favorites">
      <div className="container">
        <h1 
          className="page__detailPage title Favorites__title"
        >
          My wishlist
        </h1>
        {favorites.length > 0 && (
          <section className="Favorites__products">
            {favorites.map(card => (
              <ProductCard card={card} key={card.title} />
            ))}
          </section>
        )}

        {favorites.length === 0 && (
          <h1>Your wishlist is empty</h1>
        )}
      </div>
    </div>
  )
}