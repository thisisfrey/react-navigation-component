import { matchPath, useNavigate } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { IContent } from "../../content/content";

interface IModuleItem {
  module: IContent;
  open: boolean;
  isFavorite: boolean;
}

const SelectedStyle = {
  content: '""',
  height: "75%",
  width: "4px",
  position: "absolute",
  right: "0",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#61dbfb",
};
export const ModuleItem = ({ module, open, isFavorite }: IModuleItem) => {
  const route = module.fullRoute;
  const isSelectedModule = matchPath(location.pathname, route) && !isFavorite;
  const navigate = useNavigate();

  return (
    <ListItem
      sx={{
        display: open ? "true" : "none",
        padding: "1px 0 1px 3px",
      }}
      onClick={() => navigate(route)}
    >
      <ListItemButton
        sx={{
          paddingTop: "2px",
          paddingBottom: "2px",
          "&:after": isSelectedModule ? SelectedStyle : {},
        }}
      >
        <ListItemText
          sx={{
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
          secondary={module.name}
        />
      </ListItemButton>
    </ListItem>
  );
};
