import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import { makeStyles, withStyles } from '@material-ui/core/styles'; 
import schools from "./schoolsOnboard.json";
import ActionMarker from "./ActionMarker";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const useStyles = makeStyles((theme) => ({
    root: {
    },
    map: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/MapBG.png"})`,
        backgroundColor: 'rgba(255,255,255,0.5)', 
        backgroundBlendMode: 'lighten', // changes opacity of background image. 
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'left 40% bottom 57%',
    },
    marker: {
        '&:hover': {
            fill: '#000'
          },
    },
}))
const MapChart = () => {
    const classes = useStyles(); 
  return (
      <div className={classes.root}>
        <div className={classes.map}>
            <ComposableMap projection="geoAlbersUsa"
                width='1000'
                style={{strokeWidth: 1,}}
            > 
            <Geographies geography={geoUrl}
            >
                {({ geographies }) => (
                <>
                    {geographies.map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        stroke="#000"
                        geography={geo}
                        fill="transparent"
                        style={{
                            default: { outline: "none" },
                            hover: { outline: "none" },
                            pressed: { outline: "none" },
                          }}
                        
                    />
                    ))}
                    {/* 
                    {geographies.map(geo => {
                    const centroid = geoCentroid(geo);
                    const cur = allStates.find(s => s.val === geo.id);
                    return (
                        <g key={geo.rsmKey + "-name"}>
                        </g>
                    );
                    })}
                    */}
                </>
                )}
            </Geographies>

            {/* coordinate system is [lon, lat] (order of d3-geo */}
            {schools.map(school => (
                <Marker coordinates={[school["lon"], school["lat"]]} width="50" height="40">
                    {/*<circle className={classes.marker} r={8} fill="#ff9999"> 
                    <img src={`${process.env.PUBLIC_URL + '/assets/flamelogoPink.png'}`} width='35' height='35'></img>
                    
            </circle> 
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor:'rgb(255,255,0)', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor:'rgb(255,0,0)', stopOpacity: 1}} />
                        </linearGradient>
                    </defs>
                  
                    <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
                   
                    
                    <text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">SVG</text>*/}
                    <ActionMarker school={school.name} image={school.mapImg}/>
                    
                    
                </Marker>
            ))}
            
            </ComposableMap>
        </div>
    </div>
  );
};

export default MapChart;
