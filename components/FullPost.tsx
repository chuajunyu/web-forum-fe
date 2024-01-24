import React from 'react';
import { Grid, CardActionArea, Card, CardContent, Typography } from '@mui/material';

interface PostProps {
    title: string;
    content: string;
}

const FullPost: React.FC<PostProps> = ({ title, content }) => {
    return (
        // <Card>
        //     <CardContent>
        //         <Typography variant="h5" component="div">
        //             {title}
        //         </Typography>
        //         <Typography variant="body1" color="text.secondary">
        //             {content}
        //         </Typography>
        //     </CardContent>
        // </Card>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {content}
              </Typography>
            </CardContent>
          </Card>
      </Grid>
    );
};

export default FullPost;
