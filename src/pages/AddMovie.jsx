import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { addMovie } from '../api/moviesApi';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await addMovie({ title, description });
      navigate('/movies', { replace: true });
    } catch (err) {
      setError(err?.message || 'Failed to add movie');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 420, mx: 'auto', mt: 6, px: 2 }}>
      <Typography variant="h4" mb={2}>Add Movie</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          type="text"
          fullWidth
          margin="normal"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          type="text"
          fullWidth
          margin="normal"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          disabled={submitting}
        >
          {submitting ? 'Adding…' : 'Add Movie'}
        </Button>
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      </form>
    </Box>
  );
}
