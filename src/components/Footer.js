import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Poppins',
        margin: 0,
        padding: 0,
        color: 'rgb(48, 46, 65)',
    },
    section: {
        position: 'static',
        height: '100%',
        width: "100%",
        content: '', 
        bottom: 0, 
        left: 0, 

        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',

        //background: '#615E73',
        // opacity: '75%',
        // background: 'rgba(97, 94, 115, 0.5)',
        //borderRadius: '50% 50% 0 0/100% 100% 0 0',
        //transform: 'scaleX(1.5)',
            
    },
    content: {
        padding: '0px',
        position: 'static',
        marginTop: '-10px',
        marginBottom: "-10px",
        zIndex: 1,
        bottom: 0,
        fontSize: '1.5rem',
        textAlign: 'center',
    },
    mailIcon: {
        fontSize: '2rem',
    },

    dividerColor: {
        background: 'rgba(48, 46, 65, 0.5)',
        marginTop: '10px',
        marginBottom: '10px',
      },
}))

export default function Footer() {
    const classes = useStyles();  
    return (
        
        <div className={classes.root} id="footer">
            <Divider classes={{root: classes.dividerColor}} />
            <section className={classes.section}>
                <div className={classes.content}> 
                    <h5> want to get in touch? <br/>
                        <Button
                            href={`mailto:info@campfireconvos.com?subject=Problem Solving Web Form Contact`}
                            target="_top"
                            rel="noopener noreferrer"
                            style={{textTransform: 'none', color: 'rgb(48, 46, 65)', fontSize: '1.5rem', fontFamily: 'Playfair Display'}}
                        >
                            <MailOutlineIcon classes={{root: classes.mailIcon}}/>
                        </Button>
                    </h5>
                </div>
            </section>
            
        </div>
       
    )
}