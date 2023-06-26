import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Typography,
  Divider,
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
    <Box sx={{ width: "100%", mb: 2 }}>
      <MuiBreadcrumbs
        separator={
          <KeyboardArrowRightIcon
            sx={{
              color: "#ccc",
            }}
          />
        }
        sx={{
          display: "flex",
          alignItems: "center",
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
              <Typography key={index} sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "18px" }}>
                {el.name}
              </Typography>
            );
          } else {
            return (
              <Link
                sx={{ color: "rgba(0, 0, 0, 0.6)", cursor: "pointer", fontSize: "18px" }}
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
      <Divider sx={{ mt: 1 }} />
    </Box>
  );
};

export default Breadcrumbs;
