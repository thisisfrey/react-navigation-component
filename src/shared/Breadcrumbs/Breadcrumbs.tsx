import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export interface IBreadcrumbProps {
  links: IBreadcrumbLink[];
}

export interface IBreadcrumbLink {
  name: string;
  link?: string;
  disabled?: boolean;
}

const Breadcrumbs = ({ links }: IBreadcrumbProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <MuiBreadcrumbs
      separator={<KeyboardArrowRightIcon />}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1,
        /* backgroundColor: "white",
        borderRadius: "16px", */
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        marginBottom: 2,
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "6px",
        padding: "0.7rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <Link
          sx={{
            cursor: "pointer",
            margin: 0,
            padding: 0,
            width: "fit-content",
            height: "fit-content",
            display: "flex",
            color: "rgba(0, 0, 0, 0.6)",
          }}
          onClick={() => navigate("/")}
        >
          <HomeOutlinedIcon />
        </Link>
      </Box>
      {links.slice(0, -1).map((el, index) => {
        if (el.disabled) {
          return (
            <Typography
              key={index}
              sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "18px" }}
            >
              {el.name}
            </Typography>
          );
        } else {
          return (
            <Link
              sx={{
                color: "rgba(0, 0, 0, 0.6)",
                cursor: "pointer",
                fontSize: "18px",
              }}
              underline="hover"
              key={index}
              onClick={() => (el.link ? navigate(el.link) : null)}
            >
              {el.name}
            </Link>
          );
        }
      })}
      <Typography sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "18px" }}>
        {links.slice(-1)[0]?.name}
      </Typography>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
