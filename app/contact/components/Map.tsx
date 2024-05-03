import React from "react";

const Map = () => {
  return (
    <div className="map block w-[100%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.150405992183!2d74.34069007442523!3d31.520028747161053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905c0d39fb72f%3A0xa5c1994a4a6a827a!2sThe%20Hexaa!5e0!3m2!1sen!2s!4v1714047537485!5m2!1sen!2s"
        height={496}
        style={{ border: "0", display: "block" }}
        allowFullScreen={true}
        loading="lazy"
        className="w-[100%]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
