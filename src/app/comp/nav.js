// src/app/comp/page.js

//----------------------------------------------
// Using PascelCasing for page names
//----------------------------------------------
'use client'
import Image from "next/image";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'

const Fixer_Upper_Logo = "logo.svg";

export default function NavBar() {
  
    // Handeling the redirect to the signup page
    const redirect = useRouter()

    // Home redirect
    const handleClickHome = () => {
      redirect.push('../')
    }
    // Login redirect
    const handleClickLogin = () => {
      redirect.push('/login')
    }
    // Sign up redirect
    const handleClickSignUp = () => {
      redirect.push('/signup')
    }

  return (
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" style={{position: "fixed" , backgroundColor: "#1a1a1a"}}>
        <Toolbar style={{paddingTop: "10px", paddingBottom: "10px"}}>
          
          {/* Logo */}
          <Image
            onClick={handleClickHome}
            className="dark"
            style={{padding: "10px", marginRight: "10px"}}
            src={Fixer_Upper_Logo}
            alt="fixer-uppers logo"
            width={100}
            height={100}
            priority
          />
          {/* Company Name */}
          <h1 className="text-2xl font-bold text-white" >Fixer-Uppers</h1>
          

          <Typography
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 2 }}>
          </Typography>

          <Button style={{color: "#87CB28", marginLeft: "10px", marginRight: "10px"}} color="inherit" onClick={handleClickLogin}>login</Button>
            
          <Button style={{backgroundColor: "#87CB28", marginLeft: "10px", marginRight: "10px"}} color="inherit" variant="contained" onClick={handleClickSignUp}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

