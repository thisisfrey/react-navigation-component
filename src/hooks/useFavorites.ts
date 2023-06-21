import { useState } from "react";

export interface IUseFavorites {
  favorites: string[];
  setFavorites: (value: string[]) => void;
}

const useFavorites = (): IUseFavorites => {
  const [storedFavorites, setStoredFavorites] = useState(() => {
    try {
      const item = window.localStorage.getItem("favorites");
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  const setFavorites = (value: string[]) => {
    try {
      setStoredFavorites(value);
      window.localStorage.setItem("favorites", JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return { favorites: storedFavorites, setFavorites };
};

export default useFavorites;
