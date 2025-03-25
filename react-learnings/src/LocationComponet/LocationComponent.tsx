// import React from "react";
// import { useGeolocated } from "react-geolocated";

// const LocationComponent = () => {
//   const { coords, isGeolocationAvailable, isGeolocationEnabled } =
//     useGeolocated({
//       positionOptions: {
//         enableHighAccuracy: false,
//       },
//       userDecisionTimeout: 5000,
//     });
//   return !isGeolocationAvailable ? (
//     <div>Your browser does not support Geolocation</div>
//   ) : !isGeolocationEnabled ? (
//     <div>Geolocation is not enabled</div>
//   ) : coords ? (
//     <table>
//       <tbody>
//         <tr>
//           <td>latitude</td>
//           <td>{coords.latitude}</td>
//         </tr>
//         <tr>
//           <td>longitude</td>
//           <td>{coords.longitude}</td>
//         </tr>
//         <tr>
//           <td>altitude</td>
//           <td>{coords.altitude}</td>
//         </tr>
//         <tr>
//           <td>heading</td>
//           <td>{coords.heading}</td>
//         </tr>
//         <tr>
//           <td>speed</td>
//           <td>{coords.speed}</td>
//         </tr>
//       </tbody>
//     </table>
//   ) : (
//     <div>Getting the location data&hellip; </div>
//   );
// };

// export default LocationComponent;

import React, { useState, useEffect } from "react";

function LocationComponent() {
  const [locationData, setLocationData] = useState<any>(null);
  const [locationError, setLocationError] = useState<any>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationData(position);
          setLocationError(null);
        },
        (error) => {
          setLocationError(error);
          setLocationData(null);
        }
      );
    } else {
      setLocationError({ code: 0, message: "Geolocation API not supported" });
      setLocationData(null);
    }
  }, []);

  return (
    <div>
      {locationError && (
        <div>
          <p>Error getting location:</p>
          <pre>{JSON.stringify(locationError, null, 2)}</pre>
        </div>
      )}
      {locationData && (
        <div>
          <p>Latitude: {locationData.coords.latitude}</p>
          <p>Longitude: {locationData.coords.longitude}</p>
        </div>
      )}
    </div>
  );
}

export default LocationComponent;
