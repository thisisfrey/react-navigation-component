import { Box, Button, IconButton, Typography } from "@mui/material";
import Icon from "@mui/icons-material/SentimentSatisfied";
import { useNavigate } from "react-router-dom";
import { flatContent } from "../../shared/content/content";
import StarBorderIcon from "@mui/icons-material/StarBorder";
//import StarIcon from "@mui/icons-material/Star";
//import { useDebounce } from "app/shared/util/debounce";

interface ITileProps {
  title?: string;
  icon?: JSX.Element;
  favoriteId: number;
}

const Tile = ({
  title = "Title",
  icon = <Icon />,
  favoriteId,
}: ITileProps): JSX.Element => {
  const navigate = useNavigate();

  const module = flatContent.find((content) => favoriteId === content.id);

  return module !== undefined ? (
    <Button
      sx={{
        borderRadius: "16px",
        flexDirection: "column",
        boxShadow: 2,
        textTransform: "none",
        margin: "1.7rem",
        padding: "0",
        width: "15rem",
        height: "15rem",
        backgroundColor: "#61dbfb",
        color: "white",
      }}
      onClick={() => navigate(module.fullRoute)}
    >
      <IconButton
        sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <StarBorderIcon sx={{ scale: "1.5" }} />
      </IconButton>
      <Box sx={{ color: "white", transform: "scale(2.2)", margin: 2 }}>
        {icon}
      </Box>
      <Typography sx={{ width: "80%", fontSize: "25px", fontWeight: "400" }}>
        {title}
      </Typography>
    </Button>
  ) : (
    <>Modul nicht gefunden</>
  );
};
export default Tile;
