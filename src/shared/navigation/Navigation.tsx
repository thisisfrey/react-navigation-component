import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  List,
  CssBaseline,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import TopBar from "./components/topbar";
import { content, IContent } from "../content/Content";
import { ReactNode, useState } from "react";
import { ModuleItem } from "./components/moduleItem";
import { favorites as favoriteContent } from "../content/Favorites";
import { NavItem } from "./components/navItem";
//import constants from "../../config/constants";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  overflowY: "hidden",
  height: "calc(100vh - 70px)",
  marginTop: "70px",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  overflowY: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  height: "calc(100vh - 70px)",
  marginTop: "70px",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "isExpanded",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Navigation = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar expanded={isExpanded} />
      <Drawer variant="permanent" open={isExpanded}>
        <List
          sx={{
            overflowX: "hidden",
            overflowY: "auto",
            height: "inherit",
            // Scrollbar customization
            "&:hover::-webkit-scrollbar": {
              display: "block",
            },
            "&::-webkit-scrollbar": {
              width: "0.512rem",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              height: "8px",
              borderRadius: "8px",
            },
          }}
        >
          {/* {favorites.length > 0 && () */}
          <NavItem
            el={favoriteContent}
            expanded={isExpanded}
            favorites={true}
          />

          {content.map((category: IContent, index) => {
            return (
              <Box sx={{ marginBottom: "8px" }} key={index}>
                <NavItem
                  el={category}
                  favorites={false}
                  expanded={isExpanded}
                />
                {category.modules?.map((module: IContent, index) => (
                  <ModuleItem
                    key={index}
                    module={module}
                    expanded={isExpanded}
                  />
                ))}
              </Box>
            );
          })}
        </List>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Tooltip title={!isExpanded ? "Expand" : ""} placement="right"> */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isExpanded ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => setOpen(!isExpanded)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isExpanded ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {isExpanded ? (
                <KeyboardDoubleArrowLeftIcon />
              ) : (
                <KeyboardDoubleArrowRightIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Collapse"
              sx={{
                opacity: isExpanded ? 1 : 0,
              }}
            />
          </ListItemButton>
          {/* </Tooltip> */}
        </Box>

        {/* {isExpanded && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="rgba(0, 0, 0, 0.6)">
              Version {constants.VERSION} <br />© Copyright {new Date().getFullYear()}
            </Typography>
          </Box>
        )} */}
      </Drawer>
      <Box
        sx={{
          width: "100%",
          margin: "110px 50px 40px 50px",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;

