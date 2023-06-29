import { Box, CircularProgress, ThemeProvider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Account from './components/Account';
import Home from './components/Home';
import LinkRedirect from './components/LinkRedirect';
import { auth } from './firebase';
import theme from './theme';

const App = () => {
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();
  const [initialLoad, setInitialLoad] = useState(
    pathname === "/" || pathname === "/account" ? true : false
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setInitialLoad(false);
    });
  }, []);

  if (initialLoad)
    return (
      <Box mt={5} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user ? <Navigate to="/account" replace={true} /> : <Home />
            }
          />
          <Route
            path="account"
            element={user ? <Account /> : <Navigate to="/" replace={true} />}
          />
          <Route path=":shortCode" element={<LinkRedirect />} />
        </Routes>
    </ThemeProvider>
  );
};

export default App;
