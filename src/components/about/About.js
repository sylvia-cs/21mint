import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { Grid, Box, Divider } from '@material-ui/core';
import AboutTags from './AboutTags';
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
    title: {
        alignContent: 'center',
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        fontSize: '2.5rem',
        color: 'rgb(0,0,0,1)',
        fontWeight: 'bold',
        lineHeight: .3,
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '50px',
        paddingBottom: '0',
        },
    subtitle: {
        color: 'red',
        fontFamily: 'Poppins',
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
    forms: {
        alignContent: 'center',
        textAlign: 'center',
    },
}))

export default function() {
    const classes = useStyles();  
    const header = {text: "about"}
    return (
        <div>
            <AboutTags />
            <h1 className={classes.title}>Join the community.</h1>
            <div className={classes.forms}>
                <form style={{fontFamily: 'Poppins', margin: '10px', fontSize: '1rem'}}>
                    <label>
                        Have a referral code? Enter it here  ->
                        <input type="text" name="code" style={{margin: '5px', width: '200px', padding: '12px 20px', margin: '8px 0px', borderSizing: 'border-box', backgroundColor: '#44C792', color: 'white',}}/>
                    </label>
                    <input style={{padding: '10px 20px', color: 'white', backgroundColor: 'black', margin: '10px'}} type="submit" value="Submit" />
                </form>
                <form style={{fontFamily: 'Poppins', margin: '10px', fontSize: '1rem'}}>
                    <label>
                        Or, enter your email to join the waiting list  ->
                        <input type="text" name="name" style={{margin: '5px', width: '200px', padding: '12px 20px', margin: '8px 0px', borderSizing: 'border-box', backgroundColor: '#44C792', color: 'white',}}/>
                    </label>
                    <input style={{padding: '10px 20px', color: 'white', backgroundColor: 'black', margin: '10px'}} type="submit" value="Submit" />
                </form>
            </div>
        </div>
        
    )
}