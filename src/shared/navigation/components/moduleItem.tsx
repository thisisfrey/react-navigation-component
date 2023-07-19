import { matchPath, useNavigate } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { IContent } from "../../content/Content";
import constants from "src/config/constants";
import { SelectedStyle } from "src/config/styles";

interface IModuleItem {
  module: IContent;
  expanded: boolean;
}

export const ModuleItem = ({ module, expanded }: IModuleItem) => {
  const route = module.fullRoute;
  const isSelectedModule = matchPath(
    location.pathname,
    constants.BASE_URL + route
  );
  const navigate = useNavigate();

  return (
    <ListItem
      sx={{
        display: expanded ? "true" : "none",
        padding: "0",
      }}
      onClick={() => navigate(route)}
    >
      <ListItemButton
        sx={{
          "&:after": isSelectedModule ? SelectedStyle : {},
        }}
      >
        <ListItemText sx={{ marginLeft: "18px" }} secondary={module.name} />
      </ListItemButton>
    </ListItem>
  );
};

