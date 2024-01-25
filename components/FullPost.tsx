import React from "react";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { BACKEND_BASE_URL } from "./constants";
import Moment from 'moment';


interface Post {
  id: string;
  user_id: string;
  title: string;
  created_at: string;
  content: string;
}

interface FullPostProps {
  Id: string;
}

const FullPost: React.FC<FullPostProps> = (props: FullPostProps) => {
  const [post, setPost] = useState<Post>();
  const [username, setUsername] = useState<string>("");
  const {Id} = props;

  

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");

    
    async function getPost() {
      if (!Id) {
        return <p>loading...</p>;
      }
      const response = await fetch(BACKEND_BASE_URL + `/posts/${Id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.json();
    }

    async function getUser() {
      const response = await fetch(BACKEND_BASE_URL + "/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.json()
    }

    getPost().then((output) => {
      console.log(output);
      setPost(output);
    });

    getUser().then((output) => {
      setUsername(output.name);
    });
  }, [Id]);

  if (!post) {
    return <p>loading...</p>; // render a loading state
  }

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h1" variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {Moment.parseZone(post.created_at).local().format('MMMM Do YYYY, h:mm:ss a')}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            By {username}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {post.content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FullPost;
