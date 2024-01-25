import React from "react";
import FeaturedPost from "../../components/FeaturedPost";
import MainFeaturedPost from "../../components/MainFeaturedPost";
import { Container, Grid } from "@mui/material";
import { BACKEND_BASE_URL } from "../../components/constants";
import { useState, useEffect } from "react";

interface Post {
  user_id: string;
  id: string;
  title: string;
  created_at: string;
  content: string;
}

const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");
    console.log(`Bearer <${token}>`);
    async function getposts() {
      const response = await fetch(BACKEND_BASE_URL + "/posts", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.json();
    }
    getposts().then((output) => {
      console.log(output);
      setPosts(output);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Container style={{marginTop: 24}}>
        <MainFeaturedPost post={posts[0]} />
      </Container>

      <Grid container spacing={4}>
        {posts.slice(1).map((post) => (
          <FeaturedPost key={post.id} post={post} />
        ))}
      </Grid>
    </Container>
  );
};

export default FeedPage;
