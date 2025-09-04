import { useEffect, useState } from 'react';
import { getMovies } from '../api/moviesApi';
import { Button, Box, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setError('');
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" mb={2}>Movies</Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : movies.length === 0 ? (
        <Typography>No movies found.</Typography>
      ) : (
        <Box>
          {movies.map(movie => (
            <Card key={movie.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2">{movie.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
        onClick={() => navigate('/addmovie')}
      >
        Add New Movie
      </Button>
    </Box>
  );
}
