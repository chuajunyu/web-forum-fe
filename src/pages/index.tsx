import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Container, Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signin");
  };

  return (
    <Box
      maxWidth="sm"
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        backgroundImage: "url(../../public/images/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        style={{ marginTop: 24 }}
      >
        Web Forum
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        A fair and open forum for all
      </Typography>
      <Button onClick={handleClick} variant="contained" color="primary" size="large" fullWidth>
        Enter
      </Button>
    </Box>
  );
}
