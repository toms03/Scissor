import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { nanoid } from 'nanoid';
import { Fragment, useMemo, useState } from 'react';

import { auth, firestore } from '../../firebase';
import Card from './Card';
import Navbar from './Navbar';
import ShortenURLModal from './ShortenLinkModal';

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
  const [links, setLinks] = useState(dummyData);
  const userUid = auth.currentUser.uid;

  const linksPathRef = useMemo(
    () => collection(firestore, "users", userUid, "links"),
    [userUid]
  );

  const handleCreateShortenLink = async (name, longURL) => {
    const link = {
      name,
      longURL:
        longURL.includes("http://") || longURL.includes("https://")
          ? longURL
          : `http://${longURL}`,
      createdAt: serverTimestamp(),
      shortCode: nanoid(6),
      totalClicks: 0,
    };

    const resp = await addDoc(linksPathRef, link);

    setLinks((links) => [
      ...links,
      { ...link, createdAt: new Date(), id: resp.id },
    ]);
    setOpenModal(false);
    console.log(resp);
  };
  return (
    <>
      {openModal && (
        <ShortenURLModal
          createShortenLink={handleCreateShortenLink}
          handleClose={() => setOpenModal(false)}
        />
      )}
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

            {links.map((link, idx) => (
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
