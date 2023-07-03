import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase";
const Navbar = () => {
  return (
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
  );
};

export default Navbar;
