import React from "react";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";
import { useStore } from "../store-hooks/useStore";

const Favorites = (props) => {
  const favoriteProducts = useStore()[0].products.filter((pr) => pr.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
