import React from "react";


import { Card, CardContent, Typography, Grid, CardActionArea } from '@mui/material'
import { Hidden } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';


  const PostCard = ({post}) => {

  return (

    <Grid item xs={12} md={6} >
      <CardActionArea component="a" href="#">
        <Card sx={{display: "flex"}}>
          <div sx={{flex: 1}}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" sx={{color: "skyblue"}}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>

          <Hidden mdDown>

                <CardMedia
                  sx={{width: 200}}
                  image={post.image}
                  title={post.imageTitle}
                ></CardMedia>

          </Hidden>

        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default PostCard