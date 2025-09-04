import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const links = [
  { to: '/profile', label: 'Profile' },
  { to: '/prices', label: 'Prices' },
  { to: '/bills', label: 'Bills' },
  { to: '/ask-agent', label: 'Ask Agent' },
  { to: '/movies', label: 'Movies' }
];

function SideDrawer({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        {links.map((link) => (
          <ListItem key={link.to} disablePadding>
            <ListItemButton component={Link} to={link.to} onClick={onClose}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideDrawer;
