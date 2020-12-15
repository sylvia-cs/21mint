import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse  } from '@material-ui/core';
import TagArray from '../TagArray';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    background: 'rgba(213, 210, 226, 0.5) ',
    //background: 'linear-gradient(45deg, rgba(48, 46, 65, 0.2) 10%, rgba(255, 143, 143, 0.4) 50%)', 
    // prev gradient 1 color: rgba(64, 60, 86, 0.4)
    // prev gradient color #FF8E53  
    //margin: '10px', 
    borderRadius: 15,
    //boxShadow: '0 4px 7px 3px rgba(255, 142, 164, 0.3)',
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Playfair Display', 
    textAlign: "center",
    color: 'black', 
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    marginTop: '10px',
    height: 115,
    width: 115,
    objectFit: 'cover',
    position: 'relative',
    display: 'flex',
      marginLeft: 'auto',
      border: '2px solid ',
      borderRadius: '50%',
      marginRight: 'auto',
    //color: '#fff',
    marginBottom: '0px',
  },
  name: {
    fontFamily: 'Playfair Display',
    fontSize: '1.2rem', 
    fontWeight: '500',
    marginBottom: '-20px', 
  }, 
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#000',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandContent: {
    padding: '5px',
  },
  bio: {
    fontFamily: 'Playfair Display',
    fontSize: '1rem',
    textAlign: "center",
    color: "#000",
    //color: 'rgb(48, 46, 65)',
    padding: '10px',
  },
  tagArray: {
    marginBottom: '10px', 
  }
}));

export default function ImageCard({ member}) {
  const classes = useStyles();
  const chipStyle = {size: 'small', variant: 'default'};
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent= "center"
        justify="center"
      >
        <Grid item xs={12}>
          <CardMedia
            className={classes.media}
            image={member.imageUrl}
          />
        </Grid>
        <Grid item xs={12}>
          <CardContent className={classes.content}>
            <Typography 
              gutterBottom variant="h5" 
              component="h1" 
              className={classes.name}
            >
              {member.name}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CardActions>
        <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon style={{fontSize: '2rem'}}/>
          </IconButton>
      </CardActions> 
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid
          container
          alignItems="center"
          justifyContent= "center"
          justify="center"
          className={classes.expandContent}
        >
          <Grid item xs={12}>
            <Typography variant="body1" color="textSecondary" component="p" className={classes.bio}>
              {member.bio}
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.tagArray}>
            <TagArray tags={member.tags} size="small" chipStyle={chipStyle} />
          </Grid>
        </Grid>
      </Collapse>    
    </Card>
  );
}
