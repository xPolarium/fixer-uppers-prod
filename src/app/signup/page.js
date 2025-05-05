// Index page *****
"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
const Fixer_Upper_Logo = "logo.svg";

export default function SignUp() {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}> {/* Whole Page */}
      <div style={{ display: "flex", flexDirection: "column", width: "400px", justifyItems: "center", alignItems: "center", gap: "30px" }}> {/* Center Area */}      
        
        {/* Logo */}
        <Image 
          className="light"
          style={{marginLeft: "10px", marginRight: "10px"}}
          src={Fixer_Upper_Logo}
          alt="fixer-uppers logo"
          width={275}
          height={238}
          priority
        /> 
        {/* Company Name */}
        <h1 style={{fontFamily: "monsterrat", fontSize: "50px", fontWeight: "bold", color: "#1a1a1a" }}>Fixer-Uppers</h1> 
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "start", width: "100%" }}>
          <div style={{ display: "flex", gap: "5px", width: "100%" }}>
            <input placeholder="First Name" style={{border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
            <input placeholder="Last Name" style={{border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
          </div>

          <input placeholder="Username" style={{border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />

          <input placeholder="Email" style={{border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />

          <input placeholder="Password" style={{border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />

          <input placeholder="City" style={{border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />

          <div>
            <FormControlLabel 
              control={ <Checkbox checked={checked} onChange={handleChange} />}
              label="Are you a contractor?"
            />
          </div>
          <Button style={{ width: "100%", height: "25px", borderRadius: "25px", backgroundColor: "#87CB28" }} 
          variant="contained">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
