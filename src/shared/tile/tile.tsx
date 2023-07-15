import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { flatContent } from "../content/Content";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

interface ITileProps {
  name?: string | undefined;
  icon?: JSX.Element | undefined;
  id: string;
  isFavorite: boolean;
  onChangeFavorite: (id: string) => void;
}

const Tile = ({
  name = undefined,
  icon = undefined,
  id,
  isFavorite,
  onChangeFavorite,
}: ITileProps): JSX.Element => {
  const navigate = useNavigate();
  const module = flatContent.find((content) => id === content.id);

  if (!module) {
    console.warn("Module not found");
  }

  return module ? (
    <Button
      sx={{
        backgroundColor: "white",
        color: "primary.main",
        boxShadow: 1,
        margin: "1rem",
        padding: "5px",
        width: "8rem",
        height: "8rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "primary.light",
          color: "white",
        },
      }}
      variant="outlined"
      onClick={() => navigate(module.fullRoute)}
    >
      <Box
        sx={{
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
            display: "flex",
            justifyContent: "center",
            margin: 1,
            scale: "1.5",
          }}
        >
          {icon ? icon : module.icon}
        </Box>
        <Typography sx={{ fontSize: "18px", margin: "3px" }}>
          {name ? name : module.name}
        </Typography>
      </Box>
    </Button>
  ) : (
    <></>
  );
};
export default Tile;
