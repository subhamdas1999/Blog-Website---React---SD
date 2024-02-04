import React from 'react'
import { Typography, Container, Link } from '@mui/material'
import '../App.css';


const Footer = ({ description, title }) => {
  return (

    <footer className='foot-color'>
      <Container maxWidth="lg" >
        <Typography variant="h6" align="center" gutterBottom >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©{" "}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer




