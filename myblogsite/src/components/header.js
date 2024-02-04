import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideDrawer from './SideDrawer';




const header = () => {


  return (
    <>
    <Toolbar>

        <SideDrawer>
                    <IconButton color='inherit'>
                        <MenuIcon></MenuIcon>
                    </IconButton>
        </SideDrawer>
        

        <Typography variant='h6' sx={{flexGrow: 1, fontSize: 25} }>Blogging Website</Typography>

        <IconButton color='inherit'>

            <Badge badgeContent={4} color="primary">
                <NotificationsIcon></NotificationsIcon>   
            </Badge>

        </IconButton>
        

        <IconButton color='inherit'>
            <AccountCircleIcon></AccountCircleIcon>
        </IconButton>

    </Toolbar>


    <Divider></Divider>


    <Toolbar 
        sx={{fontSize:20, 
        textTransform: "uppercase", 
        justifyContent: "center", 
        fontFamily: "Montserrat" }}>

        Express your Emotion through work
        </Toolbar>

    
    </>
  )
}

export default header