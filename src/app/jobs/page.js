// Index page *****
"use client"
import Button from '@mui/material/Button';
import NavBar from "../comp/nav";
import Footer from "../comp/footer";
import { useRouter } from 'next/navigation';

export default function Jobs() {

  // React useRouter
  const redirect = useRouter()
  // Jobs redirect
  const handleClickCreateJob = () => {
    redirect.push('/createjob')
  }
  // Jobs redirect
  const handleClickEditJob = () => {
    redirect.push('/editjob')
  }
  // Jobs redirect
  const handleClickMyJobs = () => {
    redirect.push('/myjobs')
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

      <div style={{ display: 'flex', justifyContent: 'center', margin: "25px", alignItems: 'center' }}>
        <div style={{ paddingTop: "100px", fontFamily: "monsterrat", fontWeight: '600', display: 'block' }}>
          <h2 style={{ display: 'block', color: "black" }}>Jobs</h2>
          <h3 style={{ color: "black" }}>****TODO****</h3>

          <Button style={{ fontFamily: "palatino", transform: "translateX(-15px)", color: "#F16692", fontWeight: "bolder" }} color="inherit" variant="plain" onClick={handleClickCreateJob}><u>Create Job</u></Button>

          <Button style={{ fontFamily: "palatino", transform: "translateX(-15px)", color: "#F16692", fontWeight: "bolder" }} color="inherit" variant="plain" onClick={handleClickEditJob}><u>Edit Job</u></Button>

          <Button style={{ fontFamily: "palatino", transform: "translateX(-15px)", color: "#F16692", fontWeight: "bolder" }} color="inherit" variant="plain" onClick={handleClickMyJobs}><u>My Jobs</u></Button>

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
      <br></br>
      <Footer />
    </>
  );
}
