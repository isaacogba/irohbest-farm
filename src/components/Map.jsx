import React from "react";

const Map = ({ address, city, country }) => {
  return (
    <div className="w-full h-[27rem] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDTi8p0NZ6PalWWRBBxB5XH5SlMesdVWN8&q=${encodeURIComponent(address || city || country)}`}
      ></iframe>
    </div>
  );
};

export default Map;
