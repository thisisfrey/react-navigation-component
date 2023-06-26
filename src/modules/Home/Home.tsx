import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { content } from "../../shared/content/content";
import { favorites } from "../../shared/content/favorites";
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
        alignItems: "center",
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
      <Box
        sx={{
          mt: 3,
          zIndex: 100,
          display: "flex",
          alignItems: "left",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Typography variant="h2">Welcome!</Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>
          Where do you want to start?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: 5,
          }}
        >
          {[favorites, ...content].map((category, index) => (
            <React.Fragment key={index}>
              <Button
                onClick={() => navigate(category.route)}
                color="primary"
                variant="contained"
                sx={{
                  borderRadius: "16px",
                  flexDirection: "column",
                  padding: "10px",
                  boxShadow: 1,
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  textTransform: "capitalize",
                  width: "10rem",
                  height: "10rem",
                  margin: "0.7rem",
                }}
              >
                <Box sx={{ color: "white", transform: "scale(2.2)", mt: 1 }}>
                  {category.icon}
                </Box>

                <Typography sx={{ mt: 2, fontSize: "20px", color: "white" }}>
                  {category.name}
                </Typography>
              </Button>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
