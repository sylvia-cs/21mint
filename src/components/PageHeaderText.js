import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    container: {
        width: '90vw',
        textAlign: 'center',
        alignItems: 'center', 
        justifyContent: 'center',
        display: "flex",
        marginLeft: 'auto',
        marginRight: 'auto',
        
    },
    title: {
        color: 'white',
        fontFamily: 'Playfair Display',
        fontWeight: 'bold',
        fontSize: 'calc(3rem + 1vw)',

    },
})); 


export default function PageHeaderText({header}) {
    const classes = useStyles();  
    return (
            <div className={classes.container}>
                <span className={classes.title}> {header.text} </span>

            </div>
    
    )

}