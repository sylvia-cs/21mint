import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import SortIcon from '@material-ui/icons/Sort';
import { Link as Scroll} from 'react-scroll'

const useStyles = makeStyles({
  list: {
    width: 250,
    background: 'rgba(255, 143, 143, 1)',
    
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    color: 'rgb(48, 46, 65)', 
    margin: '0 auto',
    fontSize:'2rem',
    flexGrow: 5,
    shadow: '2px 2px',
  },
  toolBarButtons: {
    color: 'rgb(48, 46, 65)',
    fontSize: '1rem',
    },
  dividerColor: {
    background: 'rgb(48, 46, 65)',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '10px',
    marginBottom: '10px',
  },
});

export default function Drawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  var toolBarItems = [["about", "about"], ["ourTeam", "our team"], ];
  const names = ['register', 'login'];
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        
      <List>
        {toolBarItems.map(toolBarItem => (
            <ListItem>
                <Scroll to={toolBarItem[0]} offset={-50} smooth={true}>
                    <Button className={classes.toolBarButtons} style={{textTransform: 'none', fontFamily: 'Poppins'}}>
                        {toolBarItem[1]}
                    </Button>
                </Scroll>
            </ListItem>
        ))}
        
        <Divider classes={{root: classes.dividerColor}} />

        {names.map (name => {
            return (
                <ListItem>
                <Button 
                    className={classes.toolBarButtons} 
                    style={{textTransform: 'none', fontFamily: 'Poppins'}}
                    onClick={(e) => {
                        e.preventDefault();
                        name === 'register' ? window.location.href="https://campfireconvos.com/registration" : 
                        window.location.href="https://campfireconvos.com/login" ;
                    }}
                >
                    {name} 
                </Button>
                </ListItem>
            )
          })}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'top'}>
          <Button onClick={toggleDrawer('top', true)}>
                <SortIcon className={classes.icon}/>
          </Button>
          <SwipeableDrawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
          >
            {list('top')}
          </SwipeableDrawer>
        </React.Fragment>
     
    </div>
  );
}
