import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { Grid } from '@material-ui/core';
import landingPageTags from "./landingPageTags";
import TagArray from '../TagArray';


const useStyles = makeStyles((theme) => ({
    root: {
        // minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'left', 
        textAlign: 'center',
        color: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        //marginBottom: '-5rem',   
    },

    container: {
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    title: {
        fontFamily: 'Playfair Display',
        fontSize: '2.5rem',
        color: 'rgb(0,0,0,1)',
        fontWeight: 'bold',
        lineHeight: .3,
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '0',
        paddingBottom: '0',
        },
    section: {
        height: '100%',
    },

    box: {
        maxWidth: '100%',
        width: '100px',
        height: '100%',
        backgroundColor: 'pink',
        borderRadius: '10px', 
        padding: '20px',
    }
}))

export default function() {
    const classes = useStyles();  
    const chipStyle = {size: 'medium', border: '#000', variant: 'outlined'}
    return (
        <div className={classes.root} id="about">
            <Grid
            container
            spacing={6}
            justifyContent="center"
            direction='row'
            alignItems='stretch'
            className={classes.container}
            >
                
                
                <Grid item className={classes.section} xs={12}>
                    <h1 className={classes.title}>Collaborate on issues you are</h1>
                    <h1 className={classes.title}>most passionate about.</h1>
                    <TagArray tags={landingPageTags} chipStyle={chipStyle} />
                </Grid>
            </Grid>
        </div>
        
    )
}