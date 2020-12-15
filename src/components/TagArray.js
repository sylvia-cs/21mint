import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    fontFamily: 'Playfair Display',
  },
  chip: {
    backgroundColor: '#ffffff',
    display: 'flex',
    outlined: {
      color: '#000',
      outlineColor: '#000',
    },
    
    
  },
  icon: {
    borderRadius: '50%', 
    height: '15px',
    width: '15px',
  }, 
}));

export default function Chips({tags, chipStyle}) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      
      {tags.map(tag => {
          return (
            <Chip 
                size='small'
                variant={chipStyle.variant}
                id="chip"
                classes={{root: classes.chipStyles}}
                clickable={false}
                className={classes.chip}
                icon={<Icon className={classes.icon} style={{backgroundColor: tag.color}}/>}
                label={tag.title}
                style={{fontFamily: 'Poppins'}}
            />     
           )
            
      })}
      </div>  
  );
}
