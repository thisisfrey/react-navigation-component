import { matchPath, useNavigate } from "react-router-dom";
import { IContent } from "../../content/Content";
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

const selectedStyle = {
  content: '""',
  height: "85%",
  width: "4px",
  position: "absolute",
  right: "0",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "primary.main",
};

export const NavItem = ({ el, expanded }: INavItem) => {
  const route = el.fullRoute;
  const isSelected = matchPath(location.pathname, route);
  const isInSelectedCategory = matchPath(el.route + "/*", location.pathname);

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
              "&:after": expanded && isSelected ? selectedStyle : {},
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
