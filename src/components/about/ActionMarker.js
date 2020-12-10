
import React from 'react';

export default class App extends React.Component {
    school = this.props.school; 
    image = this.props.image;
    state = {
        open: false,
        hover: false
     };
    toggleExpand = () => {
        this.setState({
            open: !this.state.open
        });
    };

    toggleHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }
    
    render() {
        var markerStyle; 
        var markerStroke; 
        if (this.state.hover) {
            markerStyle = {fill: 'rgb(97, 94, 115)', boxShadow: '0 0 25px #000'}
            markerStroke=5

        } else {
            markerStyle = {fill: 'rgb(255, 143, 143)'}
            markerStroke=0
        }
        return (
            <svg width="100%" height="100%" overflow="visible" onClick={this.toggleExpand}>
            {/*<defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" style={{stopColor:'rgb(255,255,0)', stopOpacity: 1}} />
                   <stop offset="100%" style={{stopColor:'rgb(255,0,0)', stopOpacity: 1}} />
               </linearGradient>
            </defs> */}
            
           <ellipse x="50%" y="50%" rx="10" ry="10"  
                onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
                stroke="rgba(255,255,255, 0.3)"
                strokeWidth={markerStroke}
                style={markerStyle}
           />

           {this.state.open ?
                <svg overflow="visible">
                
                {/*<path d="M-54,-66 L-50,-63 -46,-66" />
                <polygon points="-50,-63 -54,-66 -46,-66" style={{fill: 'rgb(0,0,255)'}} />
                
                <rect width="150" height="50" x="-75" y="-55" rx="10" ry="10" style={{fill: 'rgb(255, 143, 143)'}} />
                
                <text fill="#000" textLength="140" maxWidth="150" fontSize font-family="Poppins" x="-70" y="-25"> {this.school} </text>
                */}
                <image href={`${process.env.PUBLIC_URL + '/assets/' + this.image + '.svg'}`} width="150" height="50" x="-75" y="-55" />
                </svg>
               :
               null
           }  
       </svg>  
        );
       }
      }
/*
export default function ActionMarker() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false
    }); 

    const toggleExpand = () => {
        this.setState({
            open: !this.state.open
        })
    };
    const marker = () => {
        <svg className={classes.marker} onClick={toggleExpand}>
             <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'rgb(255,255,0)', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor:'rgb(255,0,0)', stopOpacity: 1}} />
                </linearGradient>
            </defs>
            <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
            

            {this.state.open ?
                <text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">SVG</text>
                :
                null
            }  
        </svg>     
    }

    return (
         <svg>
             {marker}
         </svg>    
    )
}
*/   