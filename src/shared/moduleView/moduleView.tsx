import Tile from "../../shared/tile/tile";
import { content, flatContent, IContent } from "../../shared/content/content";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useFavorites from "src/hooks/useFavorites";

interface IModuleView {
  name?: string;
  isFavorites?: boolean;
}

function ModuleView({ name, isFavorites = false }: IModuleView) {
  const [modules, setModules] = useState<IContent[]>([]);

  const { favorites, changeFavorites } = useFavorites();

  useEffect(() => {
    if (isFavorites) {
      const favoriteModules = [];
      for (const id of favorites) {
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
  }, [name, isFavorites, favorites]);

  return (
    <>
      {modules?.map((module, index) => (
        <Tile
          key={index}
          id={module.id}
          isFavorite={favorites.includes(module.id)}
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
          <Typography variant="h6" color="rgba(0, 0, 0, 0.2)">
            No modules
          </Typography>
        </Box>
      )}
    </>
  );
}

export default ModuleView;
