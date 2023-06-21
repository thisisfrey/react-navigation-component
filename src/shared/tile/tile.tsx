import { Box, Button, Typography } from "@mui/material";
import Icon from "@mui/icons-material/SentimentSatisfied";
import { useNavigate } from "react-router-dom";
import { flatContent } from "../../shared/content/content";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import useFavorites from "../../hooks/useFavorites";
import { useState } from "react";

interface ITileProps {
  title?: string;
  icon?: JSX.Element;
  id: string;
}

const Tile = ({
  title = "Title",
  icon = <Icon />,
  id,
}: ITileProps): JSX.Element => {
  const navigate = useNavigate();
  const module = flatContent.find((content) => id === content.id);
  // workaround to trigger re-render after favorites changed
  const [changedFavorites, setChangedFavorites] = useState(true);

  const { favorites, setFavorites } = useFavorites();
  const onSelectFavorite = (id: string) => {
    if (!favorites.includes(id)) {
      favorites.push(id);
      setFavorites(favorites);
    } else {
      favorites.splice(favorites.indexOf(id), 1);
      setFavorites(favorites);
    }
    // trigger re-render
    setChangedFavorites(!changedFavorites);
  };

  return module !== undefined ? (
    <Button
      sx={{
        borderRadius: "16px",
        boxShadow: 2,
        margin: "1rem",
        padding: "5px",
        width: "10rem",
        height: "10rem",
        backgroundColor: "#61dbfb",
        color: "white",
        cursor: "pointer",
      }}
      onClick={() => navigate(module.fullRoute)}
    >
      <Box
        sx={{ color: "white", position: "absolute", top: 0, right: 0, m: "8px" }}
        onClick={(event) => {
          event.stopPropagation();
          onSelectFavorite(id);
        }}
      >
        {favorites.includes(id) ? (
          <StarIcon sx={{ scale: "1.2" }} />
        ) : (
          <StarBorderIcon sx={{ scale: "1.2" }} />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            color: "white",
            margin: 1,
            scale: "2",
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            width: "80%",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Button>
  ) : (
    <>Modul nicht gefunden</>
  );
};
export default Tile;

// TODO, trigger re-render on icon change
