import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/header/Header';
import About from './components/about/About';

import OurTeam from './components/team/OurTeam';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh', 
    background: 'linear-gradient(170deg, black 40%, #44C792 5%, #44C792 45%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
})); 
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <CssBaseline />
      
      <Header />
      <About />
      <Footer />
    </div>
  );
}
