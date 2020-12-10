import React from 'react'
import Slider from 'infinite-react-carousel';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles'; 
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const slides = [
  {name: "Carousel_1", 
   header: "Find your communities.", 
   detail: 
            `Choose from > 1000 tags that reflect your identity, 
            spark your curiosity, and push you towards your goals.
            `
  },

  {name: "Carousel_2", 
   header: "Expand your horizons.", 
   detail: 
            `
            Encounter people and stories that are vastly different from you, 
            and find solidarity among others with even the most niche topics.
            `
  },

  {name: "Carousel_3", 
   header: "Build your coalition.", 
   detail: 
            `
            Easily find, communicate, 
            and organize with people who are 
            working towards similar causes.

            `
  },
]

const arrowstyles = {
  root: {
    color: 'rgba(97, 94, 115, 0.7)',
    '&:hover': {
        color: 'rgba(97, 94, 115,1)',
    },
    display: 'flex',
    alignItems: 'center',
    height: '100%',



}}

const CustomPrevArrow = withStyles((theme) => (
    arrowstyles
))(ArrowBackIosIcon);

const CustomNextArrow = withStyles((theme) => (
    arrowstyles
))(ArrowForwardIosIcon);



const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    justifyContent: 'center', alignItems: 'center',
    
  },


  slide: {
    outline: '0 !important',
      // '&:focus': {
      //   boxShadow: 'none !important',
      //   outline: '0 !important',
      //   outline: 'none',
      // },
  },

  header: {
    fontSize: '2rem',
    color: 'black',
    fontWeight: 'bold',
    lineHeight: '99%', 
    marginBottom: '30px',
  },

  imgTextWrapper: {
    position: 'relative',
    width: 'calc(27rem + 10vw)',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center', alignItems: 'center',
    color: 'transparent',
    borderRadius: '30px',
    overflow: 'hidden',
    display: 'flex', 
  },

  screenshot: {
    width: '100%',
  },  

  textBox: {
    color: 'transparent',
    fontSize: 'calc(1.5vw + 0.7rem)',
    fontWeight: 'bold',
    top: '0', left: '0', right: '0', bottom: '0', 
    position: 'absolute',
    
    transition: '0.5s',
    '&:hover': {
      color: 'white',
      background: 'rgba(97, 94, 115,0.7)',
    },
  },

  detail: {
    height: 'fit-content', 
    padding: '20px',
    top: '0', left: '0', right: '0', bottom: '0', 
    position: 'absolute',
    marginTop: 'auto', marginBottom: 'auto',

    
  },
})); 


export default function Carousel() {

  const classes = useStyles();
  /*const [state, setState] = React.useState({
    hover: false
  });

  const toggleHover = () => {
    console.log('mouse enter/leave') 
    setState({
       hover: !state.hover
     });
  };
  */

  return (
    <div className={classes.root}>
      <Slider 
      className={classes.slider}
      dots
      slidesToShow={1}
      autoplay={true}
      autoplaySpeed={5000}
      autoplayScroll={1}
      prevArrow={<CustomPrevArrow/>}
      nextArrow={<CustomNextArrow/>}
      adaptiveHeight={true}
      
      
    >
      {slides.map (slide => {
          return (
            <div className={classes.slide}>
                <Grid container item 
                  style={{}}
                  
                >
                  <Grid item xs={12}>
                    <Box>
                        <Typography className={classes.header}>
                            {slide.header}
                        </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} 
                      
                      style={{}}
                  >       
                          <Box className={classes.imgTextWrapper}
                            //onMouseEnter={() => toggleHover()} 
                            //onMouseLeave={() => toggleHover()}
                            //style={state.hover ? {background: 'rgba(97, 94, 115,0.7)'} : {background: 'transparent'}}
                          >
                            <span className={classes.imgWrapper}>
                              <img src={`${process.env.PUBLIC_URL + '/assets/' + slide.name + '.svg'}`} 
                              className={classes.screenshot}
                              alt="carousel-slide"
                              />
                            </span>
                              <span className={classes.textBox} >
                                <span className={classes.detail} > {slide.detail}  </span>
                              
                          
                              </span>

                            
                          </Box>
                  </Grid>

                </Grid>
            </div>
      )})}    
    </Slider>
    </div>
    ) 
}