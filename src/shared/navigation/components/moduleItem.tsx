import { matchPath, useNavigate } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { IContent } from "../../content/content";

interface IModuleItem {
  module: IContent;
  expanded: boolean;
}

const SelectedStyle = {
  content: '""',
  height: "85%",
  width: "4px",
  position: "absolute",
  right: "0",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "primary.main",
};
export const ModuleItem = ({ module, expanded }: IModuleItem) => {
  const route = module.fullRoute;
  const isSelectedModule = matchPath(location.pathname, route);
  const navigate = useNavigate();

  return (
    <ListItem
      sx={{
        display: expanded ? "true" : "none",
        marginLeft: "10px",
        padding: "1px",
      }}
      onClick={() => navigate(route)}
    >
      <ListItemButton
        sx={{
          "&:after": isSelectedModule ? SelectedStyle : {},
        }}
      >
        <ListItemText secondary={module.name} />
      </ListItemButton>
    </ListItem>
  );
};

