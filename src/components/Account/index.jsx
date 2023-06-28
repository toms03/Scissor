import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useState } from "react";

import Navbar from "./Navbar";

function Account() {
  const [openModal, setOpenModal] = useState(false);
  openModal;
  return (
    <>
      <Navbar />
      <Box mt={{ xs: 3, sm: 5 }} p={{ xs: 2, sm: 0 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Box mb={5} display="flex">
              <Box mr={3}>
                <Typography variant="h4">Links</Typography>
              </Box>
              <Button
                onClick={() => setOpenModal(true)}
                disableElevation
                variant="contained"
                color="primary"
              >
                Create new
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Account;
