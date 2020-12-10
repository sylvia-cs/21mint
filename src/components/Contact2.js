import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid, Box } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        // justifyContent: 'center', 
        // alignItems: 'center', 
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column', 
        },
        padding: '20px',
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '5vw',
        color: 'rgb(255, 143, 143,1)',
      //  textShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        lineHeight: '99%', 
        paddingLeft: '35px',
    },
    formContainer: {
        width: '100%',
        height: '300px',
        backgroundColor: 'pink',
    },
}))

export default function() {
    const classes = useStyles();  
    return (

        <div className={classes.root}>

                <Box>
                <span > <b> Placeholder for contact form</b> </span>
                </Box>

            
        
        </div>
       
    )
}