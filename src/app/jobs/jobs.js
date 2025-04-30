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
    <>
    
    </>
  );
}
