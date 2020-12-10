import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { Grid, Box, Divider } from '@material-ui/core';
import AboutTags from './AboutTags';
import Map from './Map';
import schools from "./schoolsOnboard.json";
import Carousel from "./Carousel";
import PageHeaderText from "../PageHeaderText";
import AboutExamples from "./AboutExamples";
import { Link as Scroll} from 'react-scroll'


var schoolsOnBoard = Object.keys(schools).length

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Poppins',
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column', 
        },
        textAlign: 'center',
        marginBottom: '50px', 
        // padding: '10px',
    },

    

    subtitle: {
        fontSize: '1.5rem',
        color: 'rgb(0,0,0,1)',
        fontWeight: 'bold',
        lineHeight: '99%', 
        padding: '2px',
    },

    subtext: {
        fontFamily: 'Poppins',
        fontSize: '1rem',
        color: 'rgb(0,0,0,1)',
        lineHeight: '99%', 
        padding: '2px',
    },

    box: {
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        borderRadius: '10px', 
        padding: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0',
        marginBottom: '0',
    },

    screenshot: {
        // transform: 'rotate(-30deg)',
        width: 'calc(30rem + 10vw)',
        height: 'auto',
        padding: '5px',
        alignContent: 'center',
    },

    mapContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    mapText: {
        color: 'black',
        fontSize: '3vw', 
        paddingLeft: '20px',
        paddingTop: '30px',
        paddingBottom: '30px',
    }, 
    mapSubText: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    divider: {
        backgroundColor: '#FF8F8F',
        height: 1,
        margin: '50px',
    },
}))

export default function() {
    const classes = useStyles();  
    const header = {text: "about"}
    return (
        <div className={classes.root} id="about">

            <Grid
                container
                spacing={4}
                justify='center'
                alignItems='center'
            >   
               {/* do we need this header?? looks off. 
               potentially use background color shift or rename section? */}
                <Grid item container xs={10} lg={8} justify='center'>
                     <PageHeaderText header={header}/>
                    

                    <p style={{padding: '1.5rem', marginLeft: '2rem', marginRight: '2rem', marginBottom: '0px', backgroundColor: '#D5D2E2', borderRadius: '5px'}} 
                        className={classes.subtext}>
                        No matter what your goal is, 
                        Campfire will connect you with the precise and necessary support to make it happen. 
                        Below are but a few examples.

                    </p>

                </Grid>

                <Grid item container xs={12} justify='center'>
                    <AboutExamples />
                </Grid>
                
               {/*  MOVED THIS TO ABOUTEXAMPLES.JS TO DECREASE FILE LENGTH 
                <Grid container item xs={12} justify='center' alignItems='center' spacing={2} style={{padding:'10px'}}>
                    <Grid item xs={5}>
                        <Box className={classes.box} style={{marginRight: '5px'}}>
                            <img src={`${process.env.PUBLIC_URL + '/assets/illuminate2.png'}`} height='200px' weight='200px'></img>
                        </Box>
                    </Grid>

                    <Grid item xs={5}>
                        <Box className={classes.box} style={{maxWidth: '25rem', marginLeft: '5px'}}>
                            <p className={classes.subtitle}>Illuminate hidden similarities.</p>
                            <p className={classes.subtext}>From niche interests and identities to college coursework, engage with peers who share overlapping similarities. </p>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container item xs={12} justify='center' alignItems='center' spacing={0} style={{padding:'10px' }}>
                    <Grid item xs={5}>
                        <Box className={classes.box} style={{maxWidth: '25rem', marginRight: '5px'}}>
                            <p className={classes.subtitle}>Develop community.</p>
                            <p className={classes.subtext}>Explore communities and shape new ones as you connect and chat with peers.</p>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box className={classes.box} style={{marginLeft: '5px'}}>
                            <img src={`${process.env.PUBLIC_URL + '/assets/mobile_user.png'}`} height='200px' weight='200px'></img>
                        </Box>
                    </Grid>
                </Grid>
                */}

        
                {/* VANESSA: I replaced this with <Divider /> 
                <Grid item xs={12} md={6} style={{padding: '0'}}>
                    <Box>
                    <div style={{paddingBottom: '20px'}}><hr
                    style={{
                        color: '#FF8F8F',
                        backgroundColor: '#FF8F8F',
                        height: 5,
                        width: '80%',
                        }}/></div>
                    </Box>
                </Grid>
                */}

                <Divider classes={{root: classes.divider}} style={{width: '70%',}}/>
                
                <Grid container item xs={12}>
                    <Grid item xs={2}/>
                        <Grid item xs={8}>
                            <Box>
                            <Carousel />
                            </Box>
                        </Grid>
                    <Grid item xs={2}/>
                </Grid>
                

                

                {/* Vanessa: I commented these out because I think the carousel can convey this info, lmk what you think 
                
                <Typography className={classes.subtitle}>
                    Get Started
                </Typography>
                
                <Grid container item xs={12} justify='center' alignItems='center' spacing={3} style={{padding:'10px'}}>
                    <Grid item xs={3}>
                        <Box className={classes.box}>
                            <p>1. Consider communities that encompass your own overlapping identities and interests.</p>
                            <img src={`${process.env.PUBLIC_URL + '/assets/venn_diagram.png'}`} height='100px' weight='100px'></img>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.box}>
                            <p>2. Select from our wide range of tags to form a new group or join an existing one.</p>
                            <img src={`${process.env.PUBLIC_URL + '/assets/tag_selection.png'}`} height='100px' weight='100px'></img>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.box}>
                            <p>3. Join in on the conversation!</p>
                            <img src={`${process.env.PUBLIC_URL + '/assets/chatting2.png'}`} height='100px' weight='100px'></img>
                        </Box>
                    </Grid>
                </Grid>
                */}
                
                <Grid item xs={12} id="aboutTags" className={classes.aboutTags}>
                    <AboutTags />              
                </Grid>

                <Divider classes={{root: classes.divider}} style={{width: '70%',}}/>

                

                <Grid item container className={classes.mapContainer} alignItems='center' justify='center' spacing={0} xs={12}> 

                    {/*<Grid item xs={12} className={classes.mapText}>
                        <span > <b> Enriching campus communities. </b> </span>
                        <img style={{width: '50%'}}src={`${process.env.PUBLIC_URL + '/assets/world.png'}`}  className={classes.connect}></img>

                    </Grid>
                    */}
                    <Grid item xs={12} md={3}>
                        <span style={{fontSize: '2rem', fontWeight: 'bold'}}>live at {schoolsOnBoard} schools and counting. </span>
                        <br/>
                        <br/>
                        <span style={{fontSize: '1rem'}} className={classes.mapSubText}> don't see your school? <br/>
                            <Scroll to="footer" smooth={true}>
                                <u>contact us.</u>
                           
                            </Scroll>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {/*<img src={`${process.env.PUBLIC_URL + '/assets/map.png'}`}  className={classes.connect}></img> */}
                        <Map />
                    </Grid>
                    {/* VANESSA: Commented schools box out 
                    <Grid item xs={6} md={3}
                           style={{backgroundColor: 'rgb(255, 143, 143, 0.5)',
                                textAlign:'left',
                                padding: '1rem',
                                borderRadius: '5px',
                                }}>
                        <div style={{alignContent: 'center'}}><p>At 3 schools and counting.</p>
                        <li>Harvard University</li>
                        <li>Loyola University Chicago</li>
                        <li>Yale University</li></div>
                        <Grid item xs={12}>
                            <ColorButton
                                onClick={(e) => {
                                e.preventDefault();
                                window.location.href="https://campfireconvos.com/registration";}}
                            > 
                                <b style={{fontSize: '1rem', color: 'rgb(0, 0, 0, 0.5)'}}> register now  </b>
                            </ColorButton> 
                        </Grid>
                        Bring Campfire to your school.
                        <Grid item xs={12}>
                            <ColorButton
                                onClick={(e) => {
                                e.preventDefault();
                                // scroll to contact page
                                window.location.href="https://campfireconvos.com";}}
                            > 
                                <b style={{fontSize: '1rem', color: 'rgb(0, 0, 0, 0.5)'}}> contact us  </b>
                            </ColorButton> 
                        </Grid>

                    </Grid>
                    */}
                </Grid>

                

            </Grid>
            
        </div>
        
    )
}