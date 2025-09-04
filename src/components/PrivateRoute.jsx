import { useUser } from "../contexts/UserContext";
import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function PrivateRoutes({children}) {
  const { user ,loading} = useUser();
  
  if(loading){
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>
    )
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}