import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useGeolocated } from "react-geolocated";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FaEarthAmericas } from "react-icons/fa6";

// const Icon = FaEarthAmericas as unknown as React.FC;

const MapComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  console.log("coords", useGeolocated());
  // console.log("getPosition", getPosition());

  useEffect(() => {
    coords && setPosition([coords?.latitude, coords?.longitude]);
  }, [coords]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          {/* Card Container */}
          <div className="relative w-80 bg-white rounded-2xl shadow-lg p-4">
            {/* World Icon (Half Inside, Half Outside) */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 p-3 rounded-full z-20">
              <div className="w-10 h-10 flex items-center justify-center text-white text-xl">
                <FaEarthAmericas className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 z-20"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Map View Placeholder (Replace with Actual Map) */}
            {coords && (
              <div className="h-72 w-full bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden z-10">
                {/* Map Component */}
                <MapContainer
                  center={[coords?.latitude, coords?.longitude]}
                  zoom={12}
                  scrollWheelZoom={false}
                  className="absolute inset-0 h-full w-full rounded-lg"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[coords?.latitude, coords?.longitude]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            )}

            {/* Bottom Section */}
            <div className="p-4 text-center">
              <p className="text-gray-600">{coords?.latitude}</p>
              <p className="font-semibold">{coords?.longitude}</p>

              {/* Share Button */}
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600">
                SHARE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MapComponent;

// import { useEffect, useRef, useState } from "react";
// import { X } from "lucide-react";
// import { useGeolocated } from "react-geolocated";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import { FaEarthAmericas } from "react-icons/fa6";
// import "leaflet/dist/leaflet.css"; // Make sure you include this

// const MapComponent = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [position, setPosition] = useState<[number, number]>([0, 0]);
//   // const mapRef = useRef(null); // Create a ref for the map
//   const mapRef = useRef<L.Map | null>(null);

//   const { coords, isGeolocationAvailable, isGeolocationEnabled } =
//     useGeolocated({
//       positionOptions: {
//         enableHighAccuracy: false,
//       },
//       userDecisionTimeout: 5000,
//     });

//   useEffect(() => {
//     if (coords) {
//       setPosition([coords.latitude, coords.longitude]);
//     }
//   }, [coords]);

//   // Fix map display issue when opening the modal
//   useEffect(() => {
//     if (mapRef.current) {
//       setTimeout(() => {
//         mapRef.current?.invalidateSize();
//       }, 500);
//     }
//   }, [isOpen]);

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="relative w-96 bg-white rounded-2xl shadow-lg p-4">
//             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 p-3 rounded-full z-20">
//               <FaEarthAmericas className="w-10 h-10 text-white" />
//             </div>

//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500 z-20"
//               onClick={() => setIsOpen(false)}
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* ✅ Add a container with a fixed size */}
//             <div className="h-64 w-full bg-gray-200 rounded-lg relative overflow-hidden z-1">
//               {coords && (
//                 <MapContainer
//                   center={position}
//                   zoom={18}
//                   scrollWheelZoom={false}
//                   className="absolute inset-0 h-full w-full rounded-lg"
//                   ref={mapRef}
//                 >
//                   <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   />
//                   <Marker position={position}>
//                     <Popup>Your Location</Popup>
//                   </Marker>
//                   <MapResizeFix />
//                 </MapContainer>
//               )}
//             </div>

//             <div className="p-4 text-center">
//               <p className="text-gray-600">{coords?.latitude}</p>
//               <p className="font-semibold">{coords?.longitude}</p>

//               <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600">
//                 SHARE
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // ✅ Helper component to force map update on render
// const MapResizeFix = () => {
//   const map = useMap();
//   useEffect(() => {
//     setTimeout(() => {
//       map.invalidateSize();
//     }, 500);
//   }, []);
//   return null;
// };

// export default MapComponent;
