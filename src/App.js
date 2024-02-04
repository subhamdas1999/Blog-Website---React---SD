import './App.css';
import * as React from 'react';
import {Container, Grid, ThemeProvider, createTheme} from '@mui/material'
import Header from './components/header';
import Featurepost from './components/Featurepost';
import PostCard from './components/PostCard';
import { MyCardfeaturedPosts, sidebar } from './Data/data'
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (

    <ThemeProvider theme={darkTheme}>
              <Container>
                  <Header></Header>
                  <Featurepost>Feature</Featurepost>
                    <br></br>

                    <Grid container spacing={3}>
                        {MyCardfeaturedPosts.map((post) => (
                          <PostCard key={post.title} post={post} />
                        ))}
                    </Grid>
                            <br></br>
                    <Grid container spacing={5}>
                        <Main title="From the firehose" />
                        <Sidebar
                          title={sidebar.title}
                          description={sidebar.description}
                          archives={sidebar.archives}
                          social={sidebar.social}
                        />
                    </Grid>


              </Container>


              <Footer
                  title="Footer"
                  description="Something here to give the footer a purpose!"
              />

   </ThemeProvider>
  );
}

export default App;
