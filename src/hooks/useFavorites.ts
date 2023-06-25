import { useState } from "react";

export interface IUseFavorites {
  favorites: string[];
  changeFavorites: (id: string) => void;
}

const useFavorites = (): IUseFavorites => {
  const key = "favorites";
  const [favoritesLS, setFavoritesLS] = useState<string[]>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  const changeFavorites = (id: string): void => {
    const ls = window.localStorage.getItem(key);
    let favoritesLS = ls ? JSON.parse(ls) : [];

    if (!favoritesLS.includes(id)) {
      favoritesLS.push(id);
    } else {
      favoritesLS = favoritesLS.filter((el: string) => el !== id);
    }
    window.localStorage.setItem(key, JSON.stringify(favoritesLS));
    window.dispatchEvent(new Event("changeFavorites"));
    setFavoritesLS(favoritesLS);
  };

  return {
    favorites: favoritesLS,
    changeFavorites,
  };
};
export default useFavorites;
