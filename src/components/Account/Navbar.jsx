import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6">Scissor</Typography>
          <Box ml="auto">
            <Button color="inherit">Links</Button>
            <Button color="inherit" onClick={() => signOut(auth)}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
