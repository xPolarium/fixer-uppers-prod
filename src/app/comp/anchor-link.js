// src/app/comp/anchor-link.js

//----------------------------------------------
// Using PascelCasing for page names
//----------------------------------------------

import Link from 'next/link';
import Typography from '@mui/material/Typography';
export default function AnchorLink({color, href = "#", text }) {

  return (
    <Link style={{ fontFamily: "Montserrat" }} href={href} >
      <Typography color={color} level="title-sm" variant="plain" > 
          {text}
      </Typography>
    </Link>
   
  );
}

