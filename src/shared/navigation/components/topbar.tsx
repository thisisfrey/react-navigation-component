import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, Toolbar, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import reactLogo from "../../../assets/react.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";

export interface ITopBar {
  expanded?: boolean;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  height: "70px",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ expanded = false }: ITopBar): JSX.Element => {
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{
        backgroundColor: "#212121",
        m: 0,
        p: 0,
        display: "flex",
        justifyContent: "center",
      }}
      position="fixed"
      open={expanded}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img src={reactLogo} alt="reactLogo" />
          <Typography sx={{ m: 2, fontSize: "32px", color: "primary.main" }}>
            React
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton style={{ color: "white" }}>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <NotificationsNoneIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;

