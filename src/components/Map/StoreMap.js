import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './StoreMap.scss'

const mapStyle = "mapbox://styles/gilblasse/ckgss3yep1w1119mft8359eqx"
const mapBoxToken = process.env.REACT_APP_MAPBOX_TOKEN


export default function StoreMap() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 41.709347,
    longitude: -73.9296166,
    pitch: 40,
    zoom: 17
  });



  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle={mapStyle}
      attributionControl={false}
      mapboxApiAccessToken={mapBoxToken}
      id="Contact-Page-Map"
    >
        <Marker latitude={41.709325} longitude={-73.929396} offsetLeft={-20} offsetTop={-10}>
          <div className="marker-icon">
              <LocationOnIcon/>
              <RadioButtonUncheckedIcon/>
          </div>
        </Marker>

    </ReactMapGL>

    
  );
}