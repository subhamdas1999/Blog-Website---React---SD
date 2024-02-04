import React from "react";

import {  Divider, Grid, Typography } from '@mui/material'

import { posts } from "../Data/data";
import Markdown from "markdown-to-jsx";


const Main = ({title}) => {

  return (
    <Grid item xs={12} md={8}>

        <Typography variant="h6" gutterBottom>{title} </Typography>

        <Divider />
        
        {posts.map((post) => (
        <Markdown key={post.body}>{post.body}</Markdown>
        ))}
  </Grid>
  )
}

export default Main