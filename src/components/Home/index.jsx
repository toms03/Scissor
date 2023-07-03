import { Box, Button, Grid, Hidden, Typography } from '@mui/material';
import { useState } from 'react';

import AuthModal from './AuthModal';

const Home = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      boxSizing="border-box"
      height="100vh"
      bgcolor="#56B7BA"
      color="#fff"
    >
      {openAuthModal && <AuthModal onClose={() => setOpenAuthModal(false)} />}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Scissor</Typography>
        <Button onClick={() => setOpenAuthModal(true)} color="inherit">
          Login/Signup
        </Button>
      </Box>

      <Box display="flex" flexGrow={1} alignItems="center">
        <Grid container alignItems="center">
          <Grid item sm={6}>
            <Box>
              <Typography variant="h3">Short links, easy pizzy</Typography>
              <Box my={2}>
                <Typography>
                  Powerful link shortner helping you remain in your
                  customers&apos; memories!
                </Typography>
              </Box>
              <Button
                onClick={() => setOpenAuthModal(true)}
                disableElevation
                variant="contained"
                size="large"
                style={{ color: "#56B7BA" }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Hidden only="xs">
            <Grid item sm={6}>
              <img
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                src="/assets/mockup.png"
                alt="mockup"
              />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
