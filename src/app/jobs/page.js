// Index page *****
"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import NavBar from "../comp/nav";
import Footer from "../comp/footer";

const Fixer_Upper_Logo = "logo.svg";

export default function Jobs() {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
    <NavBar />
    <div style={{ paddingTop: "100px", fontFamily: "monsterrat", fontWeight: '600', display: 'flex', justifyContent: 'center', margin: "25px", alignItems: 'center', gap: "25px" }}>
      <h2 style={{ color: "black" }}>Jobs</h2>
      <h3 style={{ color: "black" }}>TODO****</h3>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
    <Footer />
    </>
  );
}
