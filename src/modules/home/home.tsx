import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { content } from "../../shared/content/content";
import { useNavigate } from "react-router-dom";
import BackgroundImg from "../../assets/landing.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        mt: 5,
        ml: "3rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url("${BackgroundImg}")`,
          backgroundSize: "cover",
          overflowY: "hidden",
        }}
      />
      <Typography
        sx={{
          color: "white",
          fontSize: "42px",
          fontWeight: "600",
          mt: 5,
          zIndex: "100",
        }}
      >
        Welcome!
      </Typography>
      <Typography
        sx={{
          color: "white",
          mt: 2,
          zIndex: "100",
          fontSize: "22px",
        }}
      >
        Where do you want to start?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: 5,
          width: "100%",
        }}
      >
        {content.map((category, index) => (
          <React.Fragment key={index}>
            <Button
              onClick={() => navigate(category.route)}
              sx={{
                background: "#FFFFFF",
                borderRadius: "16px",
                flexDirection: "column",
                padding: "10px",
                boxShadow: 2,
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                textTransform: "capitalize",
                width: "10rem",
                height: "10rem",
                margin: "0.7rem",
              }}
            >
              <Box sx={{ color: "#61dbfb", transform: "scale(2.2)", mt: 1 }}>
                {category.icon}
              </Box>

              <Typography sx={{ mt: 2, fontSize: "20px", color: "#61dbfb" }}>
                {category.name}
              </Typography>
            </Button>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default Home;
