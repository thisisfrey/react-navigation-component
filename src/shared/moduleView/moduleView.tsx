import Tile from "../../shared/tile/tile";
import { content, flatContent, IContent } from "../../shared/content/content";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface IModuleView {
  name: string;
}

function ModuleView({ name }: IModuleView) {
  const [modules, setModules] = useState<IContent[]>([]);
  const [tst, setTst] = useState(false);

  useEffect(() => {
    console.log("name?: ", name);

    if (name === "Favorites") {
      getFavorites();
    } else {
      const category = content.find((el) => {
        return el.name === name;
      });
      if (category?.modules) setModules(category.modules);
    }
  }, [name]);

  const getFavorites = () => {
    const favoritesLS = window.localStorage.getItem("favorites");
    const favoriteIds = favoritesLS ? JSON.parse(favoritesLS) : [];

    const favorites: IContent[] = [];
    for (const id of favoriteIds) {
      const module = flatContent.find((el) => el.id === id);
      if (module) favorites.push(module);
    }
    setModules(favorites);
  };

  /*  window.addEventListener("onSelectFavorite", () => {
    getFavorites();
  }); */

  return (
    <>
      {modules?.map((module, index) => (
        <Tile
          key={index}
          title={module.name}
          icon={module.icon}
          id={module.id}
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
