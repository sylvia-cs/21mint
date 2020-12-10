import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Grid, Box } from '@material-ui/core';
import { Link as Scroll} from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* not sure if we should have this or just hard code the number of schools 
-- this could unnecessarily slow up the page  */ 

// register now button 
const ColorButton = withStyles((theme) => ({
    root: {
      color: 'rgb(0, 0, 0, 0.5)',
      backgroundColor: 'rgba(255, 112, 112, 0.5)',
      textTransform: 'none', 
      '&:hover': {
        backgroundColor: 'rgb(255, 143, 143)',
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
        justifyContent: 'center', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
    }, 
    bigGrid: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
    },
    connect: {
        marginTop: '3rem',
        maxWidth: '425px',
        width: '100%',
    },
    text: {
        lineHeight: .0001,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 'calc(4rem + 1vw)',
        color: 'rgb(255, 143, 143,1)',
        textShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        lineHeight: .9,
        marginTop: '5px',
        marginBottom: '0px',
        margin: '10px',

    },
    subtitle: {
        fontFamily: 'Poppins',
        fontSize: '2rem',
        color: 'rgb(48, 46, 65)',
        lineHeight: 1,
        marginLeft: '10px',
        marginTop: '5px',
        marginBottom: '5px',
    },

    boxes: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
   
    learnMoreBox: {
        backgroundColor: 'rgb(255, 143, 143, 0.5)',
        borderRadius: '5px',
        height: '100%',

    },

    boxesText: { 
        marginTop: '5%', 
        marginBottom: '5%',
        padding: '3px', 
        textAlign: 'center', 
        fontFamily: 'Poppins', 
        fontWeight: '500',
        fontSize: '1rem', 
        color: 'rgba(0,0,0,1)',
    }

})) 

export default function HeaderMainContent() {
    const classes = useStyles(); 

    return(
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                justify="center"
                alignItems="center"
                className={classes.bigGrid}
                style={{marginBottom:'0px'}}
            >
                <Grid item xs={5} md={4} >
                    <div>
                        <img src={`${process.env.PUBLIC_URL + '/assets/connect.png'}`}  className={classes.connect} alt="connect-icon"></img>
                    </div>             
                </Grid>
                
                <Grid item container 
                    xs={12} md={6} 
                    
                    spacing={1}
                    justify='flex-start'
                    alignItems='center'
                >
                    <Grid item xs={12}>
                        <div className={classes.text}> 
                        <h1 className={classes.title}>campfire<br/> <div style={{color: 'rgb(48, 46, 65)', padding: '0px'}}>convos</div> </h1><br/>
                        <p className={classes.subtitle}> illuminating our <br/> <b style={{color: 'rgb(255, 143, 143, 0.8)', padding: '0px'}}> hidden similarities.</b></p> 
                        </div>
                    </Grid>
                            
                    <Grid item container  
                        direction='row' 
                        alignItems='stretch' 
                        spacing={4} 
                        xs={12}
                        className={classes.boxes}
                    >
                        <Grid item xs={6} >
                            <Box display='flex' className={classes.learnMoreBox}> 
                                <Grid container direction='row' justify='center' alignItems="center" className={classes.boxesText}>
                                    <Grid item xs={9}>
                                        <Box>Sign up within minutes with your college email.</Box>
                                    </Grid>
                                        
                                    <Grid item xs={12}>
                                        <ColorButton
                                            onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href="https://campfireconvos.com/registration";}}
                                            style={{padding: '1rem', marginLeft: 'auto', marginRight: 'auto'}}
                                        > 
                                            <b style={{fontSize: '1rem', padding: '0px'}}> register now  </b>
                                        </ColorButton> 
                                    </Grid>
                                       
                                </Grid>      
                            </Box>
                        </Grid>
                            
                        <Grid item xs={6}>
                            <Box display='flex' className={classes.learnMoreBox}> 
                                <Grid container direction='row' justify='center' alignItems="center" className={classes.boxesText}>
                                    <Grid item xs={8}>
                                        <Box> Learn more about Campfire.</Box>
                                    </Grid>
                                    <Grid item xs={12} style={{paddingTop: '5px'}}> <Scroll to="about" smooth={true}> <CustomExpandMore /> </Scroll> </Grid>
                                </Grid>
                            </Box>
                        </Grid> {/* END OF BUTTONS BELOW MAIN TEXT */}
                    </Grid> {/* CONTAINER FOR BUTTONS */}        
                </Grid> {/* END OF TEXT GRID */}
            </Grid>
        </div>
    )

}