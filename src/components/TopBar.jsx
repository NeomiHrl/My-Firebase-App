import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useUser } from '../contexts/UserContext';
import { useState } from 'react';

function TopBar({ onMenuClick }) {
  const { user, loading, logout } = useUser();

  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (!confirm('Are you sure you want to log out?')) return;
    setLoggingOut(true);
    try {
      if (logout) await logout();
    } catch (err) {
      console.error('Logout failed', err);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            My Firebase App
          </Typography>
        </Box>
        {!loading && user && (
          <>
            <Link
              component={RouterLink}
              to="/profile"
              underline="always"
              color="inherit"
              sx={{ ml: 2 }}
              aria-label="go to profile"
              fontSize={20}
            >
              {user.displayName || user.email}
            </Link>
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{ ml: 2, bgcolor: '#ef9a9a', color: 'white', '&:hover': { bgcolor: '#ef5350' } }}
              disabled={loggingOut}
            >
              Logout
            </Button>
          </>
        )}

  {!loading && !user && (
          <>
            <Button color="inherit" component={RouterLink} to="/login" >
              Login
            </Button>
            <Button color="inherit" component={RouterLink} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
