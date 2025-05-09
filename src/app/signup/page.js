// Index page *****
"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { useRouter } from "next/navigation";

const Fixer_Upper_Logo = "logo.svg";

// Handeling Submit



export default function SignUp() {

  // how ot handle the Submit button
  const handleSubmit = async () => {
    const payload = {
      username,
      email,
      password,
      isContractor,
      companyName: isContractor ? companyName : null,
      cityLocation: isContractor ? cityLocation : null,
      jobType: isContractor ? jobType : null
    };

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok) {
      alert("User created!");
      router.push("../jobs");
    } else {
      alert("Error: " + data.error);
    }

  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const [isContractor, setIsContractor] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [cityLocation, setCityLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  // Redirect router
  const router = useRouter();

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}> {/* Whole Page */}
      <div style={{ display: "flex", flexDirection: "column", width: "400px", justifyItems: "center", alignItems: "center", gap: "30px" }}> {/* Center Area */}

        {/* Logo */}
        <Image
          className="light"
          style={{ marginLeft: "10px", marginRight: "10px" }}
          src={Fixer_Upper_Logo}
          alt="fixer-uppers logo"
          width={275}
          height={238}
          priority
        />
        {/* Company Name */}
        <h1 style={{ fontFamily: "monsterrat", fontSize: "50px", fontWeight: "bold", color: "#1a1a1a" }}>Fixer-Uppers</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "start", width: "100%" }}>
          {/* Fist and Last name */}
          <div style={{ display: "flex", gap: "5px", width: "100%" }}>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
          </div>
          {/* Username */}
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
          {/* Email */}
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
          {/* Password */}
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
          {/* City */}
          <input
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", padding: "4px" }}>
            <FormControlLabel
              control={<Checkbox
                checked={isContractor}
                onChange={(e) => setIsContractor(e.target.checked)} />}
              label="Are you a contractor?"
            />


            {isContractor && (

              <>
                {/* Company Name */}
                <input
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
                {/* City Located */}
                <input
                  placeholder="City Located"
                  value={cityLocation}
                  onChange={(e) => setCityLocation(e.target.value)}
                  style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
                {/* Job Type */}
                <input
                  placeholder="Job Type"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  style={{ border: "1.5px solid black", borderRadius: "5px", width: "100%", padding: "4px" }} />
              </>
            )}
          </div>

          <Button
            style={{ width: "100%", height: "25px", borderRadius: "25px", backgroundColor: "#87CB28" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>

        </div>
      </div>
    </div>
  );
}
