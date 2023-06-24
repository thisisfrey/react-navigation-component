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
  isFavorite: boolean;
  onChangeFavorite: (id: string) => void;
}

const Tile = ({
  title = "Title",
  icon = <Icon />,
  id,
  isFavorite,
  onChangeFavorite,
}: ITileProps): JSX.Element => {
  const navigate = useNavigate();
  const module = flatContent.find((content) => id === content.id);

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
          onChangeFavorite(id);
        }}
      >
        {isFavorite ? (
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
