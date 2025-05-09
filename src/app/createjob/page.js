"use client"
// React core and state management hooks
import { useState, useEffect } from "react";
// Next.js navigation hook
import { useRouter } from "next/navigation";
// MUI Joy UI components
import {
  Button,
  Input,
  Textarea,
  Typography,
  Card,
  Stack,
  FormControl,
  FormLabel,
  Alert
} from "@mui/joy";
// Custom components
import NavBar from "../comp/nav";
import Footer from "../comp/footer";

export default function CreateJob() {
  // Next.js router for page navigation
  const router = useRouter();

  // Component state management
  const [formData, setFormData] = useState({
    cjobname: '',
    location: '',
    job_description: '',
    offered_price: ''
  });
  const [user, setUser] = useState({ username: '', rating: 0 }); // User context
  const [error, setError] = useState(''); // Error message state
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Get authenticated user data from protected endpoint
        const response = await fetch('/api/auth/me', {
          credentials: 'include' // Include cookies in request
        });
        
        // Handle unauthorized access
        if (!response.ok) throw new Error('Not authenticated');
        
        // Update user state with fetched data
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        // Redirect to login if authentication fails
        router.push('/login');
      }
    };
    fetchUser();
  }, [router]); // Re-run if router changes

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    setLoading(true); // Show loading state
    setError(''); // Clear previous errors

    try {
      // Send job data to backend API
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Extract JWT token from cookies (Note: Requires non-HttpOnly cookie)
          'Authorization': `Bearer ${document.cookie.split('token=')[1]}`
        },
        body: JSON.stringify(formData) // Send form data as JSON
      });

      // Handle non-successful responses
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create job');
      }

      // Redirect to My Jobs page on success
      router.push('/my-jobs');
    } catch (err) {
      // Display error message and reset loading state
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      {/* Main content container */}
      <Box sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 2 }}>
        <Card sx={{ p: 3 }}>
          {/* Page title */}
          <Typography level="h3" sx={{ mb: 2 }}>Create New Job</Typography>
          
          {/* User information display */}
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Typography>User: <strong>{user.username}</strong></Typography>
            <Typography>Rating: {user.rating}</Typography>
          </Stack>

          {/* Error message display */}
          {error && <Alert color="danger" sx={{ mb: 2 }}>{error}</Alert>}

          {/* Job creation form */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {/* Job name input */}
              <FormControl required>
                <FormLabel>Job Name</FormLabel>
                <Input
                  name="cjobname"
                  value={formData.cjobname}
                  onChange={(e) => setFormData({...formData, cjobname: e.target.value})}
                />
              </FormControl>

              {/* Location input */}
              <FormControl required>
                <FormLabel>Location</FormLabel>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </FormControl>

              {/* Job description textarea */}
              <FormControl required>
                <FormLabel>Job Description</FormLabel>
                <Textarea
                  name="job_description"
                  value={formData.job_description}
                  onChange={(e) => setFormData({...formData, job_description: e.target.value})}
                  minRows={4}
                />
              </FormControl>

              {/* Price input with currency decorator */}
              <FormControl required>
                <FormLabel>Offered Price ($)</FormLabel>
                <Input
                  name="offered_price"
                  type="number"
                  value={formData.offered_price}
                  onChange={(e) => setFormData({...formData, offered_price: e.target.value})}
                  startDecorator="$"
                />
              </FormControl>

              {/* Submission button with loading state */}
              <Button 
                type="submit" 
                loading={loading}
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? 'Posting...' : 'Create Job'}
              </Button>
            </Stack>
          </form>
        </Card>
      </Box>
      <Footer />
    </>
  );
}