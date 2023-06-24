import { Box, Button, Typography } from "@mui/material";
import Icon from "@mui/icons-material/SentimentSatisfied";
import { useNavigate } from "react-router-dom";
import { flatContent } from "../../shared/content/content";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";

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
  const [favorites, setFavorites] = useState<string[]>([]);

  const onSelectFavorite = (id: string) => {
    const ls = window.localStorage.getItem("favorites");
    let favoritesLS = ls ? JSON.parse(ls) : [];

    if (!favoritesLS.includes(id)) {
      favoritesLS.push(id);
    } else {
      favoritesLS = favoritesLS.filter((el: string) => el !== id);
    }

    window.localStorage.setItem("favorites", JSON.stringify(favoritesLS));
    setFavorites(favoritesLS);
    //window.dispatchEvent(new Event("onSelectFavorite"));
  };

  useEffect(() => {
    try {
      const favoritesLS = window.localStorage.getItem("favorites");
      setFavorites(favoritesLS ? JSON.parse(favoritesLS) : []);
    } catch (error) {
      setFavorites([]);
    }
  }, []);

  return module !== undefined ? (
    <Button
      sx={{
        borderRadius: "16px",
        boxShadow: 2,
        margin: "1rem",
        padding: "5px",
        width: "10rem",
        height: "10rem",
        cursor: "pointer",
      }}
      variant="contained"
      onClick={() => navigate(module.fullRoute)}
    >
      <Box
        sx={{
          color: "white",
          position: "absolute",
          top: 0,
          right: 0,
          m: "8px",
        }}
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
            width: "90%",
            fontSize: "18px",
            fontWeight: "500",
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
