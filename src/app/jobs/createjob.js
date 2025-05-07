"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from "../comp/nav";
import Footer from "../comp/footer";
import { v4 as uuidv4 } from 'uuid';
import styles from './NewJob.module.css';

export default function NewJob() {
  const router = useRouter();
  const [cjobname, setJobName] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [offeredPrice, setOfferedPrice] = useState('');
  const [user, setUser] = useState({ username: '', rating: 0 });

  // Load user info on mount (replace with real auth in production)
  useEffect(() => {
    // TODO: fetch actual user data
    setUser({ username: 'JohnDoe', rating: 4.5 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate record ID and timestamp
    const rid = uuidv4();
    const timestamp = new Date().toISOString();
    const status = 'open';

    const jobData = {
      rid,
      username: user.username,
      rating: user.rating,
      cjobname,
      location,
      job_description: jobDescription,
      offered_price: offeredPrice,
      status,
      timestamp,
    };

    try {
      // POST to backend API (create /api/jobs endpoint separately)
      await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });
      // Redirect to My Jobs page
      router.push('/my-jobs');
    } catch (error) {
      console.error('Failed to post job', error);
      // TODO: show error feedback to user
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Create New Job</h2>
        <p className={styles.userInfo}>
          User: <strong>{user.username}</strong> (Rating: {user.rating})
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Job Name"
            value={cjobname}
            onChange={(e) => setJobName(e.target.value)}
            required
          />
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <TextField
            label="Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            multiline
            rows={4}
            required
          />
          <TextField
            label="Offered Price"
            type="number"
            value={offeredPrice}
            onChange={(e) => setOfferedPrice(e.target.value)}
            InputProps={{ inputProps: { min: 0 } }}
            required
          />
          <Button variant="contained" type="submit" className={styles.submitButton}>
            Submit Job
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
