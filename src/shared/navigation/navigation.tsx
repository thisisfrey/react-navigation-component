import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItem,
  IconButton,
  CssBaseline,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import TopBar from "./components/topbar";
import { content, IContent } from "../content/content";
import { ReactNode } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { ModuleItem } from "./components/moduleItem";
//import { useAtomValue } from "jotai/react";
//import { favoriteModules } from "../store/store";
//import { getIsAuthorizedMap } from "../util/hasPermission";

const drawerWidth = 300;

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
  padding: "5px",
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
  padding: "5px",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
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

const ListItemButtonStyle = {
  content: '""',
  height: "75%",
  width: "4px",
  position: "absolute",
  right: "0",
  top: "50%",
  transform: "translateY(-50%)",
};

const Navigation = ({ children }: { children: ReactNode }) => {
  const VERSION = "1.0";

  //const selectedFavoriteModules = useAtomValue(favoriteModules);

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar open={open} />
      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton onClick={() => setOpen(!open)} sx={{ m: 1 }}>
            {open ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </IconButton>
        </Box>
        <List
          sx={{
            paddingRight: "0.2rem",
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
          {content.map((category: IContent, index) => {
            let isSelectedCategory;
            if (open) {
              isSelectedCategory = matchPath(category.route, location.pathname);
            }
            const isInSelectedCategory = matchPath(
              category.route + "/*",
              location.pathname
            );

            return (
              <Box sx={{ marginBottom: "8px" }} key={index}>
                <>
                  <ListItem
                    key={category.name}
                    disablePadding
                    sx={{ display: "block" }}
                    onClick={() => navigate(category.route)}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        "&:after":
                          (open && isSelectedCategory) ||
                          (!open && isInSelectedCategory)
                            ? ListItemButtonStyle
                            : {},
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: isInSelectedCategory ? "#61dbfb" : "inherit",
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {category.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={category.name}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {/* FAVORITES */}
                  {/* {category.id == 1
                      ? selectedFavoriteModules.map(
                          (module: IContent, index) => (
                            <React.Fragment key={index}>
                              <ModuleItem
                                module={module}
                                open={open}
                                key={index}
                                isFavorite={true}
                              />
                            </React.Fragment>
                          )
                        )} */}
                  {/* MODULES */}
                  {category.modules?.map((module: IContent, index) => (
                    <React.Fragment key={index}>
                      <ModuleItem
                        module={module}
                        open={open}
                        isFavorite={false}
                      />
                    </React.Fragment>
                  ))}
                </>
              </Box>
            );
          })}
        </List>
        {open && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="rgba(0, 0, 0, 0.6)">
              Version {VERSION} <br />© Copyright {new Date().getFullYear()}
            </Typography>
          </Box>
        )}
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
