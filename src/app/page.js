// **********************
// ***  Index page    ***
// **********************
'use client'

// Template on how to import component
import NavBar from './comp/nav';
import Carousel from './comp/carousel';
import Footer from './comp/footer';

// Importing components from Material UI
import Box from "@mui/joy/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import { typographyClasses } from "@mui/joy/Typography"
import { CssVarsProvider } from '@mui/joy/styles';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Stying
import "./styles/home.css"
import "./styles/nav.css"

const image_4 = "/image_4.jpg";
const image_5 = "/image_5.jpg";

// Import only if nessesary (Material UI or Next.js)

export default function login() {
  const redirect = useRouter()
  const handleClickJobs = () => {
    redirect.push('/jobs')
  }



  return (
    <>
      {/*Navigation Bar*/}
      <NavBar />

      {/*Quick Links*/}
      <div style={{paddingTop: "100px", fontFamily: "monsterrat", fontWeight: '600', display: 'flex', justifyContent: 'center', margin: "25px", alignItems: 'center', gap: "25px" }}>
        <Link href="#about-us" >
          <Typography color="black" component="h2" variant="plain" >
            About us
          </Typography>
        </Link>
          <Typography color="black" component="h2" variant="plain" >
        <Link href='#goal'>
            Goal
        </Link>
          </Typography>
        <Link href="#contact" >
          <Typography color="black" component="h2" variant="plain" >
            Contact
          </Typography>
        </Link>

        <Button  style={{fontFamily: "palatino", transform: "translateX(-15px)", color: "#F16692", fontWeight: "bolder"}} color="inherit" variant="plain" onClick={handleClickJobs}><u>Jobs</u></Button>
      </div>

      {/*Carousel*/}
      <Carousel />


      {/* </main> */}

      {/*About Us*/}
      <CssVarsProvider disableTransitionOnChange>
        <div className="bodyArea" gap="50px">
          <Box
            sx={theme => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              maxWidth: "80ch",
              textAlign: "center",
              flexShrink: 999,
              [theme.breakpoints.up(500)]: {
                minWidth: 420,
                alignItems: "flex-start",
                textAlign: "initial"
              },
              [`& .${typographyClasses.root}`]: {
                textWrap: "wrap",
              }
            })}
          >
            <Typography level="h5" color="black" className="text-2xl text-left text-black"
              sx={{
                fontFamily: 'monsterat',
                fontWeight: 'xl',
                fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 2.5rem)',
              }}>
              <u>About Us</u>
            </Typography>

            <Typography
              color="black"
              sx={{
                textWrap: 'wrap',
                fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                fontSize: 'md',
                lineHeight: 's'
              }}
            >
              Founded in 2025 during a recession, Fixer-Uppers was created to strengthen community ties and help people find work. It provides a place where self-described 'jack-of-all-trades' can showcase their skills across a variety of jobs, and where experienced tradespeople can work on tasks they know like the back of their hand. Whether it's repairing a leaky faucet, painting a storefront, or helping build a new deck, there's always a way to put skills to good use. Fixer-Uppers isn't just about getting the job done, it's about giving people a chance to prove themselves, build connections, and support the community one project at a time. Here, every task, big or small, becomes an opportunity to grow, learn, and make a difference."
            </Typography>
          </Box>
          <Image
            id="about-us"
            src={image_4}
            className="dark"
            alt={"Group of people working together"}
            style={{ display: "flex", width: "auto", height: "auto", marginLeft: "50px", scale: "1.3" }}
            width={600}
            height={450}
          />
        </div>
      </CssVarsProvider >

      {/*Goal*/}
      <CssVarsProvider disableTransitionOnChange>
        <div className="bodyArea">
          <Image             
            id="goal"
            src={image_5}
            className="light"
            alt={"Group of people working together"}
            style={{ width: "auto", height: "auto" }}
            width={500}
            height={450}
          />
          <Box 
            sx={theme => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              maxWidth: "60ch",
              textAlign: "center",
              flexShrink: 999,
              [theme.breakpoints.up(500)]: {
                minWidth: 420,
                alignItems: "flex-start",
                textAlign: "initial"
              },
              [`& .${typographyClasses.root}`]: {
                textWrap: "wrap",
              }
            })}
          >
            <Typography color="black" className="text-2xl text-left text-black"
              sx={{
                fontFamily: 'monsterat',
                fontWeight: 'xl',
                fontSize: 'clamp(1.575rem, 1.2636rem + 2.1818vw, 2.25rem)',
              }}>
              <u>Fixer-Uppers, Where Skill Meets Opportunities</u>
            </Typography>

            <Typography
              color="black"
              sx={{
                textWrap: 'wrap',
                fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                fontSize: 'sm',
                lineHeight: 's'
              }}
            >
              At Fixer-Uppers, our mission is to bridge the gap between those seeking assistance and those eager to offer their expertise. We strive to foster local collaboration, promote economic independence, and encourage lifelong learning. By connecting resourceful individuals with projects of all sizes, we aim to uplift neighborhoods, spark new partnerships, and inspire pride in a job well done. Our goal is to become the leading platform where practical skills meet real-world needs, enabling individuals to access reliable help and skilled workers to find rewarding opportunities.
            </Typography>
          </Box>
        </div>
      </CssVarsProvider >

      {/* Footer */}
      <Footer id="contact" />
    </>
  );
}
