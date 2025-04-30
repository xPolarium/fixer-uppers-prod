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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation'

// import './styles/nav.css'

const Fixer_Upper_Logo = "logo.svg";

export default function NavBar() {
  
    // Handeling the redirect to the signup page
    const redirect = useRouter()

    const handleClickLogin = () => {
      redirect.push('/login')
    }

    const handleClickSignUp = () => {
      redirect.push('/signup')
    }

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="Primary" position="static">
        <Toolbar style={{backgroundColor: "#1a1a1a"}}>
          
          {/* Logo */}
          <Image
            className="dark"
            style={{marginLeft: "10px", marginRight: "10px"}}
            src={Fixer_Upper_Logo}
            alt="fixer-uppers logo"
            width={75}
            height={38}
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

          {/* <Button className="Button1" color="inherit" variant="contained" onClick={handleClick}>Sign Up</Button> */}
          
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>   */}        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

