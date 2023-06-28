import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";

import Card from "./Card";
import Navbar from "./Navbar";

const dummyData = [
  {
    id: "31r08ms0fam",
    createdAt: new Date(),
    name: "My website",
    longURL: "https://google.com",
    shortCode: "masdo",
    totalClicks: 313,
  },
  {
    id: "31r08asdasfam",
    createdAt: new Date(),
    name: "E-book",
    longURL: "https://drive.google.com/asdokasnd89",
    shortCode: "182as",
    totalClicks: 32,
  },
  {
    id: "asdasdas",
    createdAt: new Date(),
    name: "E-book",
    longURL: "https://drive.google.com/asdokasnd89",
    shortCode: "182as",
    totalClicks: 32,
    cool: ["1,2,3"],
  },
];

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

            {dummyData.map((link, idx) => (
              <Fragment key={link.id}>
                <Card {...link} deleteLink={() => {}} copyLink={() => {}} />
                {idx !== dummyData.length - 1 && (
                  <Box my={4}>
                    <Divider />
                  </Box>
                )}
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Account;
