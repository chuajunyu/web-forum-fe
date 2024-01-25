import * as React from "react";
import { useState, useEffect } from "react"; // Add the missing import statement for useState
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Image from "next/image";
import { BACKEND_BASE_URL } from "./constants";

interface MainFeaturedPostProps {
  
  post: {
    user_id: string;
    id: string;
    content: string;
    created_at: string;
    title: string;
  };
}



export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const [username, setUsername] = useState<string>("");
  const { post } = props;
  console.log(props);

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getUser() {
      const response = await fetch(BACKEND_BASE_URL + "/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.json()
    }
    getUser().then((output) => {
      setUsername(output.name);
    });
    }, []);

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(https://source.unsplash.com/random?wallpapers)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      <img style={{ display: "none" }} src={"https://source.unsplash.com/random?wallpapers"} alt={"random image"} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post && post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              By {username}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post && post.content}
            </Typography>
            <Link variant="subtitle1" href={`./post/${post && post.id}`}>
              continue reading...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
