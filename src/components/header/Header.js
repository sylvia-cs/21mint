import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid, Divider } from '@material-ui/core';
import { Link as Scroll} from 'react-scroll'
import Drawer from './Drawer';
import HeaderMainContent from './HeaderMainContent';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import appTheme from '../theme';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '100vh', 
        fontFamily: 'Poppins',
        width: '100vw',
        marginBottom: '50px',
    },
    appbar: {
        background: appTheme.palette.primary.main,    
        position: 'fixed',
        display: 'flex',
        borderBottom: '5em soild white', 
    },
    appbarWrapper: {
        width: '100%',
        margin: '0 auto', 
        height: '30px'
         
    },
    appbarLogo: {
        flexGrow: 5,
        margin: '0 auto', 
    },
    icon: {
        [theme.breakpoints.up('md')]: {
              display: 'none',
        },
        toolbar: theme.mixins.toolbar,
          drawerPaper: {
            width: drawerWidth,
            [theme.breakpoints.up('sm')]: {
              position: 'relative',
            },
          },
    },
    
    toolBarButtons: {
        color: '#ffffff',
        fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        alignSelf: 'right',

    },
    dividerColor: {
        background: 'rgb(48, 46, 65)',
        marginLeft: '25px',
        marginRight: '25px',
    },
    goDown: {
        color: '#ff9f87', 
        fontSize: '4rem',
    },
    mainContent: {
        marginTop: '40px',
    }, 
})) 

export default function Header() {
    const classes = useStyles(); 
    const trigger = useScrollTrigger();

    var toolBarItems = [["about", "about"], ]
    const names = ['register']
    
    return(
        <div className={classes.root} id='header'>
            <Slide appear={false} direction="down" in={!trigger}>
            <AppBar className = {classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <Scroll to="header" smooth={true} className={classes.appbarLogo}>
                        <h1>
                            <Button>
                                <img src={`${process.env.PUBLIC_URL + '/assets/mint_logo.png'}`} width='35' height='35' alt="logo"/>
                            </Button>
                        </h1>
                    </Scroll>
                    <Grid container justify='flex-end' className={classes.toolBarButtons}>

                            <div className={classes.dividerRight}>
                            {toolBarItems.map(toolBarItem => {
                            return ( 
                                <Scroll to={toolBarItem[0]} smooth={true} offset={-50}>
                                    <Button className={classes.toolBarButtons} style={{textTransform: 'none', fontFamily: 'Poppins', color: 'rgb(48, 46, 65)'}}>
                                        {toolBarItem[1]}
                                    </Button>
                                </Scroll>
                            )})}  
                            </div> 
                            <Divider classes={{root: classes.dividerColor}} orientation='vertical' flexItem/> 
                            
                            
                            
                            <div className={classes.dividerLeft}>
                                {names.map (name => {
                                    return (
                                        <Button 
                                            className={classes.toolBarButtons} 
                                            style={{textTransform: 'none', fontFamily: 'Poppins', color: 'rgb(48, 46, 65)'}}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                name === 'register' ? window.location.href=`${process.env.PUBLIC_URL}` : 
                                                window.location.href=`${process.env.PUBLIC_URL}` ;
                                            }}
                                        >
                                           {name} 
                                        </Button>
                                    )
                                 })}
                            </div>   
                                  
                    </Grid>
                    <div className={classes.icon}>
                        <Drawer />
                    </div>  
                </Toolbar>  
            </AppBar>    
            </Slide>
            <div className={classes.mainContent}>
                <HeaderMainContent />    
            </div>
                 
        </div>
    )
}



