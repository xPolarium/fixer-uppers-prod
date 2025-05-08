// Index page *****
"use client"
import Button from '@mui/material/Button';
import NavBar from "../comp/nav";
import Footer from "../comp/footer";
import { useRouter } from 'next/navigation';

export default function EditJob() {

  // React useRouter
  const redirect = useRouter()
  // Create Job redirect
  const handleClickCreateJob = () => {
    redirect.push('/createjob')
  }
  // My Jobs redirect
  const handleClickMyJobs = () => {
    redirect.push('/myjobs')
  }
  // Jobs redirect
  const handleClickJobs = () => {
    redirect.push('../jobs')
  }

  return (
    <>
      <NavBar />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* 
        TODO
              
      */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: "25px", alignItems: 'center' }}>
        <div style={{ paddingTop: "100px", fontFamily: "monsterrat", fontWeight: '600', display: 'block' }}>
          <h2 style={{ color: "black" }}>Edit Job</h2>
          <h3 style={{ color: "black" }}>****TODO****</h3>
          <div style={{ paddingTop: "100px", fontFamily: "monsterrat", fontWeight: '600', display: 'flex', justifyContent: 'center', margin: "25px", alignItems: 'center', gap: "25px" }}>

            <Button style={{ fontFamily: "palatino", transform: "translateX(-15px)", color: "#F16692", fontWeight: "bolder" }} color="inherit" variant="plain" onClick={handleClickCreateJob}><u>Create Job</u></Button>

            <Button style={{ fontFamily: "palatino", transform: "translateX(-15px)", color: "#F16692", fontWeight: "bolder" }} color="inherit" variant="plain" onClick={handleClickMyJobs}><u>My Jobs</u></Button>

            <Button style={{ fontFamily: "palatino", transform: "translateX(-15px)", color: "#F16692", fontWeight: "bolder" }} color="inherit" variant="plain" onClick={handleClickJobs}><u>Jobs</u></Button>
          </div>
        </div>
      </div>

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
      <Footer />
    </>
  );
}
