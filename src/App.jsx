import TopBar from './components/TopBar';
import SideDrawer from './components/SideDrawer';
import {Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Prices from './pages/Prices';
import Bills from './pages/Bills';
import AskAgent from './pages/AskAgent';
import Movies from './pages/Movies';
import AddMovie from './pages/AddMovie';
import { useState } from 'react';
import PrivateRoutes from './components/PrivateRoute';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <TopBar onMenuClick={() => setDrawerOpen(true)} />
      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />
        <Route path="/prices" element={<PrivateRoutes><Prices /></PrivateRoutes>} />
        <Route path="/bills" element={<PrivateRoutes><Bills /></PrivateRoutes>} />
        <Route path="/ask-agent" element={<PrivateRoutes><AskAgent /></PrivateRoutes>} />
        <Route path="/movies" element={<PrivateRoutes><Movies /></PrivateRoutes>} />
        <Route path="/addmovie" element={<PrivateRoutes><AddMovie /></PrivateRoutes>} />
      </Routes>
      </>
  );
}

export default App
