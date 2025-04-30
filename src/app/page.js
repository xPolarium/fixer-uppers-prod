// **********************
// ***  Index page    ***
// **********************

// Template on how to import component
import NavBar from './comp/nav';
import AnchorLink from './comp/anchor-link';
import Carousel from './comp/carousel';
import MyImages from './comp/images';
const image_4 = "/image_4.jpg";

// Import only if nessesary (Material UI)
// import * as React from 'react';

export default function Home() {

  return (
    <>
    {/*Navigation Bar*/}
    <div> <NavBar /> </div>
    <br />



    {/*Quick Links*/}
    <div style={{display: 'flex', justifyContent: 'center', marginTop: "10px", alignItems: 'center'}}> 
        <AnchorLink color="grey" href="#about-us" text="About Us"/>
        <span style={{width: "15px"}}></span>
        <AnchorLink color="grey" href="#about-us" text="Goal"/>
        <span style={{width: "15px"}}></span>
        <AnchorLink color="grey" href="#about-us" text="Contact"/>
        <span style={{width: "15px"}}></span>
        <AnchorLink color="#F16692" href="#about-us" text="Jobs"/>
    </div>

    {/*Carousel*/}
    <main className="p-1">
      <Carousel />
    </main>



    {/*About Us*/}
    <div style={{display: 'inline-flex', marginLeft: "15%"}}>
      <div style={{maxWidth: "50%",  marginRight: "10px"}}>
        <h1 id='about-us' style={{fontWeight: "semibold"}}>
          <u>About Us</u>
        </h1>
        <p className="text-sm font-light text-left tracking-[-.01em]">
        Founded in 2025 during a recession, Fixer-Uppers was created to strengthen community ties and help people find work. It provides a place where self-described "jack-of-all-trades" can showcase their skills across a variety of jobs, and where experienced tradespeople can work on tasks they know like the back of their hand. Whether it's repairing a leaky faucet, painting a storefront, or helping build a new deck, there's always a way to put skills to good use. Fixer-Uppers isn't just about getting the job done, it's about giving people a chance to prove themselves, build connections, and support the community one project at a time. Here, every task, big or small, becomes an opportunity to grow, learn, and make a difference.
        </p>
      </div>

      <div style={{display: "flex", maxWidth: "100%", maxHeight: "auto", justifyContent: 'right', marginLeft: "10px", marginRight: "15%"}}>
      <MyImages image={image_4} alt="Group of people working together" size={1.5} />
      </div>

    </div>



    </>
  );
}
