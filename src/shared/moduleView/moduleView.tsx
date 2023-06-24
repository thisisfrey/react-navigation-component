import Tile from "../../shared/tile/tile";
import { content, flatContent, IContent } from "../../shared/content/content";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface IModuleView {
  name: string;
}

function ModuleView({ name }: IModuleView) {
  const [modules, setModules] = useState<IContent[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const favoritesLS = window.localStorage.getItem("favorites");
    setFavoriteIds(favoritesLS ? JSON.parse(favoritesLS) : []);
  }, []);

  useEffect(() => {
    if (name === "Favorites") {
      const favoriteModules = [];
      for (const id of favoriteIds) {
        const module = flatContent.find((el) => el.id === id);
        if (module) favoriteModules.push(module);
      }
      setModules(favoriteModules);
    } else {
      const category = content.find((el) => {
        return el.name === name;
      });
      if (category?.modules) setModules(category.modules);
    }
  }, [name, favoriteIds]);

  const changeFavorites = (id: string) => {
    const ls = window.localStorage.getItem("favorites");
    let favoritesLS = ls ? JSON.parse(ls) : [];

    if (!favoritesLS.includes(id)) {
      favoritesLS.push(id);
    } else {
      favoritesLS = favoritesLS.filter((el: string) => el !== id);
    }
    window.localStorage.setItem("favorites", JSON.stringify(favoritesLS));
    setFavoriteIds(favoritesLS);
  };

  return (
    <>
      {modules?.map((module, index) => (
        <Tile
          key={index}
          title={module.name}
          icon={module.icon}
          id={module.id}
          isFavorite={favoriteIds.includes(module.id)}
          onChangeFavorite={(id) => changeFavorites(id)}
        />
      ))}
      {modules?.length === 0 && (
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -20%)",
          }}
        >
          <Typography variant="h4" color="rgba(0, 0, 0, 0.2)">
            No modules selected
          </Typography>
        </Box>
      )}
    </>
  );
}

export default ModuleView;
