"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import NavBar from "../comp/nav";
import Footer from "../comp/footer";

export default function CreateJob() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    cjobname: '',
    location: '',
    job_description: '',
    offered_price: ''
  });
  const [user, setUser] = useState({ username: '', rating: 0 });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Load user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include'
        });
        
        if (!response.ok) throw new Error('Not authenticated');
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        router.push('/login');
      }
    };
    fetchUser();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${document.cookie.split('token=')[1]}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create job');
      }

      router.push('/my-jobs');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <Box sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 2 }}>
        <Card sx={{ p: 3 }}>
          <Typography level="h3" sx={{ mb: 2 }}>Create New Job</Typography>
          
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Typography>User: <strong>{user.username}</strong></Typography>
            <Typography>Rating: {user.rating}</Typography>
          </Stack>

          {error && <Alert color="danger" sx={{ mb: 2 }}>{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl required>
                <FormLabel>Job Name</FormLabel>
                <Input
                  name="cjobname"
                  value={formData.cjobname}
                  onChange={(e) => setFormData({...formData, cjobname: e.target.value})}
                />
              </FormControl>

              <FormControl required>
                <FormLabel>Location</FormLabel>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </FormControl>

              <FormControl required>
                <FormLabel>Job Description</FormLabel>
                <Textarea
                  name="job_description"
                  value={formData.job_description}
                  onChange={(e) => setFormData({...formData, job_description: e.target.value})}
                  minRows={4}
                />
              </FormControl>

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