import React from 'react';

function Map({ location }) {
 // Construct the Google Maps embed URL
 

 return (
    <div className="map-placeholder">
      <iframe
        src={location}
        width="350"
        height="500"
        style={{ border: "0",borderRadius:"30px"}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
 );
}

export default Map;
