import { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import GlobalContext from '../components/GlobalContext';
import React from 'react';
import NavTop1 from "../components/NavTop1";
 
const Layout = () => {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState();
  const globalContextValue = useMemo(() => {
    return {
      user,
      setUser,
      setStatus,
    };
  }, [user]); 
  return(
    <GlobalContext.Provider value={globalContextValue}>
      <Box> 
        <NavTop1 />
        <Outlet/>
      </Box>
    </GlobalContext.Provider>
  )
};

export default Layout;