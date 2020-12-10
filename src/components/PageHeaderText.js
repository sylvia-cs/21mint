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
    border: {
        borderBottom: "3px solid lightgray",
        width: "100%"
    },
    title: {
        weight: '400',
        color: 'rgb(255, 143, 143,1)',
        fontFamily: 'Poppins',
        fontSize: 'calc(3rem + 1vw)',
        textShadow: '3px 3px rgba(211,211,211, 1)',
        whiteSpace: 'nowrap',
    },
})); 


export default function PageHeaderText({header}) {
    const classes = useStyles();  
    return (
            <div className={classes.container}>
                <div className={classes.border} />
                        <span className={classes.title}> {header.text} </span>
                <div className={classes.border} />
            </div>
    
    )

}