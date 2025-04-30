// src/app/comp/images.js

//----------------------------------------------
// Using PascelCasing for page names
//----------------------------------------------

import Image from "next/image";

export default function MyImages({id="#", image, size,  alt}) {
  
  return (
    <Image
      id="#"
      className="dark"
      style={{justifyItems: "center", marginLeft: "10px", marginRight: "10px"}}
      src={image}
      alt={alt}
      width={275 * size}
      height={238 * size}
      priority
    />
  );
}

