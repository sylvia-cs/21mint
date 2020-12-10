import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { Grid, Box, Divider} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Poppins',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: 'auto', marginRight: 'auto',
        color: 'black',
    },

    subtitle: {
        fontSize: '1.5rem',
        lineHeight: '99%', 
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },

    subtext: {
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },

    box: {
        width: '100%',
    },
    icon: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
           width: "25vw",
        },
    },
    divider: {
        background: 'rgba(48, 46, 65, 0.3)',
        marginTop: '30px', marginBottom: '30px',
        marginLeft: 'auto', marginRight: 'auto',
        width: '30%'
    },



})); 

export default function() {
    const classes = useStyles(); 
    return (
        <div className={classes.root}>
            <Grid item container xs={12} justify='center' alignItems='center' spacing={8}>
               
                <Grid item xs={3}>
                    <Box className={classes.box}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/About_1.svg'}`} className={classes.icon} alt="girl-doing-schoolwork"/>
                    </Box>
                </Grid>

                <Grid item xs={6} width="100%" style={{textAlign: 'left'}}>
                    <Box className={classes.box}>
                        <p className={classes.subtitle}> <span style={{fontWeight: 'bold'}}>Ace the class: </span>Homework partners near you.</p>
                        <p className={classes.subtext}>
                            Find people to collaborate with in your timezone. 
                            <br/>
                            <b> Challenge: </b> Is there someone in all the same classes as you?
                        </p>
                    </Box>
                </Grid>
            </Grid>

            <Divider classes={{root: classes.divider}} />

            <Grid item container xs={12} justify='center' alignItems='center' spacing={8}>
                <Grid item xs={6} width="100%" style={{textAlign: 'left'}}>
                    <Box className={classes.box}>
                        <p className={classes.subtitle}><span style={{fontWeight: 'bold'}}>Faster outreach:</span>  Stop emailing 15 listservs to publicize an event.</p>
                        <p className={classes.subtext}>
                        Directly reach everyone who is interested in the area of your event, 
                        regardless of how broad or niche. 
                            <br/>
                            <b> Bonus: </b>  See exactly how many people you’re reaching for 
                            different topic (we call them “tags”) combinations.
                            
                        </p>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box className={classes.box}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/About_2.svg'}`} className={classes.icon} alt="online-communication-icon"/>
                    </Box>
                </Grid>
            </Grid>

            <Divider classes={{root: classes.divider}} />

            <Grid item container xs={12} justify='center' alignItems='center' spacing={5}>
               
                <Grid item xs={3}>
                    <Box className={classes.box}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/About_3.svg'}`} className={classes.icon} alt="online-friends-icon"/>
                    </Box>
                </Grid>

                <Grid item xs={6} width="100%" style={{textAlign: 'left'}}>
                    <Box className={classes.box}>
                        <p className={classes.subtitle}>Make friends, find <span style={{fontWeight: 'bold'}}>family.</span></p>
                        <p className={classes.subtext}>
                            Meet people in areas where you thought you were alone. 
                            Discover a community to battle struggles together or 
                            to dive deeper into a shared area of interest. 
                        </p>
                    </Box>
                </Grid>
            </Grid>


        
        </div>

    )
}