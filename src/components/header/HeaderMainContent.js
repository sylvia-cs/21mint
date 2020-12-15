import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Grid, Box } from '@material-ui/core';
import { Link as Scroll} from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Autorenew } from '@material-ui/icons';

/* not sure if we should have this or just hard code the number of schools 
-- this could unnecessarily slow up the page  */ 

// register now button 
const ColorButton = withStyles((theme) => ({
    root: {
      color: 'rgb(0, 0, 0, 0.5)',
      backgroundColor: 'rgba(255, 112, 112, 0.5)',
      textTransform: 'none', 
      '&:hover': {
        backgroundColor: 'rgb(68, 199, 146)',
        color: 'black', 
      },
      display: 'flex',
      marginTop: '8px',
    },
  }))(Button);

  const CustomExpandMore = withStyles((theme) => ({
    root: {
        paddingLeft: '5px',
        paddingRight: '5px',
        borderRadius: '5px',
        color: 'rgba(0, 0, 0, .5)',
        backgroundColor: 'rgba(255, 112, 112, 0.5)',
        '&:hover': {
            color: 'rgb(0, 0, 0, 1)', 
          },
        fontSize: '2rem',
        
    },
  }))(ExpandMoreIcon);

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        padding:  '0',
        margin: '0',
    }, 
    title: {
        fontFamily: 'Playfair Display',
        fontSize: 'calc(4rem + 1vw)',
        color: 'white',
        lineHeight: .9,
        marginTop: '100px',
        paddingTop: '30px',
        marginBottom: '0',
        marginLeft: '5%',

    },
    subcontainer: {
        backgroundColor: 'rgba(255,255,255,.95)',
        padding: '20px',
        paddingLeft: '40px',
        marginLeft: '30px',
        boxShadow: '8px 15px black',
    },
    subtitle: {
        textAlign: 'left',
        fontFamily: 'Poppins',
        fontSize: '1.2rem',
        color: 'rgb(48, 46, 65)',
        lineHeight: 1,
        color: 'black',
    },

    graphicContainer: {
        alignContent: 'right',
        marginTop: '0',
        marginBottom: '5px',
    },

    mainGraphic: {
        width: 'calc(10rem + 10vw)',
        height: 'auto',
    },

    textContainer: {
        alignContent: 'center',
        marginTop: '0',
        marginBottom: '5px',
    }
})) 

export default function HeaderMainContent() {
    const classes = useStyles(); 

    return(
        <div className={classes.root}>
            <h1 className={classes.title}>Tackling global challenges, <br/> <div style={{color: '#44C792'}}>together.</div></h1><br/>
            <Grid
                container
                spacing={2}
                justify="center"
                alignItems="center"
                className={classes.bigGrid}
                style={{margin:'0', paddingTop: '0',}}
            >
                <Grid item xs={10} md={8} className={classes.textContainer}>
                    <div className={classes.subcontainer}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/mint_full_logo.png'}`} alt='21mint logo' style={{width: '125px', height: 'auto', padding: '0', margin: '0'}}></img>
                        <p className={classes.subtitle}>Our generation is facing a number of global challenges, and we are building a platform for greater collaboration and efficiency at developing solutions.</p>
                        <p className={classes.subtitle}>If you're interested in joining our community, sign up to be notified when we launch. </p>
                    </div>             
                </Grid>
                <Grid item xs={5} md={4} className={classes.graphicContainer}>
                    <img className={classes.mainGraphic} src={`${process.env.PUBLIC_URL + '/assets/main_graphic.png'}`} ></img>
            
                </Grid>
            </Grid>
        </div>
    )

}