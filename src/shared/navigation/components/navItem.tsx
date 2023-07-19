import { matchPath, useNavigate } from "react-router-dom";
import { IContent } from "../../content/Content";
import constants from "src/config/constants";
import { SelectedStyle } from "src/config/styles";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

interface INavItem {
  el: IContent;
  expanded: boolean;
  favorites: boolean;
}

export const NavItem = ({ el, expanded }: INavItem) => {
  const route = constants.BASE_URL + el.fullRoute;
  const isSelected = matchPath(location.pathname, route);
  const isInSelectedCategory = matchPath(
    constants.BASE_URL + el.route + "/*",
    location.pathname
  );

  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: "8px" }}>
      <Tooltip title={!expanded && el.name} placement="right">
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => navigate(el.fullRoute)}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: expanded ? "initial" : "center",
              px: 2.5,
              "&:after": expanded && isSelected ? SelectedStyle : {},
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  isSelected || isInSelectedCategory
                    ? "primary.main"
                    : "inherit",
                minWidth: 0,
                mr: expanded ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {el.icon}
            </ListItemIcon>
            <ListItemText
              primary={el.name}
              sx={{
                opacity: expanded ? 1 : 0,
              }}
            />
          </ListItemButton>
        </ListItem>
      </Tooltip>
    </Box>
  );
};
