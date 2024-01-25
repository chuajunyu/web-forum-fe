import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Moment from 'moment';
import { BACKEND_BASE_URL } from './constants';
import { useEffect, useState } from 'react';

interface FeaturedPostProps {
  post: {
    id: string;
    created_at: string;
    content: string;
    title: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const [username, setUsername] = useState<string>("");
  const { post } = props;

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
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`./post/${post && post.id}`}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            {Moment.parseZone(post.created_at).local().format('MMMM Do YYYY, h:mm:ss a')}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.content.slice(0, 15)}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={"https://source.unsplash.com/random?wallpapers"}
            alt={"random image"}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
