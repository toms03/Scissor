import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar elevation={0} color="secondary" position="static">
      <Toolbar>
        <Typography variant="h6">Scissor</Typography>
        <Box ml="auto">
          <Button color="inherit">Links</Button>
          <Button color="inherit">Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
